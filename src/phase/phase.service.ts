import { Injectable, NotFoundException, Param } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Phase } from './schemas/phase.schema';
import { Unit } from '../unit/schema/unit.schema';
import { Pond } from '../pond/schema/Pond.schema';
import { addphase } from './schemas/phase.dto';
import { NotFoundError } from 'rxjs';

@Injectable()
export class PhaseService {
  constructor(
    @InjectModel(Phase.name) private phaseModel: Model<Phase>,
    @InjectModel(Unit.name) private unitModel: Model<Unit>,
    @InjectModel(Pond.name) private pondModel: Model<Pond>,
  ) {}
  async createPhase(createPhaseDto: addphase) {
    const { numberOfUnits, unitSurfaceArea, numberLines, pondLine, pondArea } = createPhaseDto;

    const phaseCount = await this.phaseModel.countDocuments();
    const phaseName = `Ph${phaseCount + 1}`;
    const phase = new this.phaseModel({ name: phaseName });

    for (let i = 1; i <= numberOfUnits; i++) {
      const unitN = `U${i}`;
      const unitName = `${phaseName}-U${i}`;
      const unit = new this.unitModel({ Units:unitN,name: unitName, surfaceArea: unitSurfaceArea });

      for (let j = 1; j <= numberLines; j++) {
        for (let k = 1; k <= pondLine; k++) {
          const pondName = `${unitName}-L${j}-P${k}`;
          const pond = new this.pondModel({ name: pondName, area: pondArea,pondline:pondLine,numberline:numberLines});
        await pond.save()
        unit.ponds.push(pond)
        }
      }
      await unit.save();
      phase.units.push(unit);
    }
    await phase.save();
    return phase;
  }


 async phasedetaied(idphase:string){
const phase=await this.phaseModel.findById(idphase).populate('units')

 if(!phase){
  throw new NotFoundException('phase  not found ')
 }
 return {
  phaseName: phase.name,
 Units:phase.units.map((unit)=>( {
 id:unit._id,
  Unit:unit.Units
}))
};
 }
 async deletephase(idphase:string){
 const deletep=await this.phaseModel.findById(idphase).populate('units')
const units=deletep.units;
const unitIds = units.map(unit => unit._id);
 await this.pondModel.deleteMany({unit:{$in:unitIds}})
 console.log('Ponds deleted');
 await this.unitModel.deleteMany({ _id: { $in: unitIds } });
 console.log('unit deleted');
 await this.phaseModel.deleteOne({_id:idphase})
 console.log('phase deleted');
}
}