import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { privateDecrypt } from 'crypto';
import { Model } from 'mongoose';
import { Phase } from 'src/phase/schemas/phase.schema';
import { Unit } from './schema/unit.schema';
import { Pond } from 'src/pond/schema/Pond.schema';
import { AddUnitsDto } from './schema/unit.dto';
import { editUnitdto } from './schema/editUnit.dto';

@Injectable()
export class UnitService {
    constructor(@InjectModel(Unit.name) private unitmodel:Model<Unit>,
       @InjectModel(Phase.name) private phasmodel:Model<Phase>,
    @InjectModel(Pond.name) private pondmodel:Model<Pond>
){}
async addunits(phaseid: string, dto: AddUnitsDto) {
    const { numberOfUnits, unitSurfaceArea, numberLines, pondLine, pondArea } = dto;

    const Phase = await this.phasmodel.findById(phaseid);
    if (!Phase) {
        throw new Error('Phase not found'); 
    }

    for (let i = 1; i <= numberOfUnits; i++) {
        const unitN = `U${Phase.units.length + 1}`; 
        const unitName = `${Phase.name}-U${Phase.units.length + 1}`; 
        const unit = new this.unitmodel({
            Units: unitN,
            name: unitName,
            surfaceArea: unitSurfaceArea,
            ponds: [] 
        });

        for (let j = 1; j <= numberLines; j++) {
            for (let k = 1; k <= pondLine; k++) {
                const pondName = `${unitName}-L${j}-P${k}`;
                const pond = new this.pondmodel({
                    name: pondName,
                    area: pondArea,
                    pondLine: pondLine,
                    numberLines: numberLines,
                    unit: unit._id 
                });

                await pond.save(); 
                unit.ponds.push(pond); 
            }
        }

        await unit.save(); 
        Phase.units.push(unit); 
    }

    await Phase.save(); 
    return Phase; 
}
async viewunit(unitid:string){
    const unit= await this.unitmodel.findById(unitid).populate('ponds')
    return{
        unitName: unit.name,
        surfaceArea:unit.surfaceArea,
        pondldetaied:unit.ponds.map((pond)=>({
        pondarea:pond.area,
        pondLine:pond.pondLine,
        lines:pond.numberLines
        }))  
    }
}
async editUnit(id: string, editUnitDto: editUnitdto ) {
    const updatedUnit = await this.unitmodel.findByIdAndUpdate(id, editUnitDto, { new: true });   
    return updatedUnit

}
async deleteunits(id: string){
    const deletep=await this.unitmodel.findById(id).populate('ponds')

const ponds=deletep.ponds
const pondid=ponds.map((pond=>pond._id))
await this.unitmodel.deleteOne({_id:id})
await this.pondmodel.deleteMany({_id:{$in:pondid}})
} 
   


}

