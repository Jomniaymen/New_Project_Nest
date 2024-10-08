import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { UnitService } from './unit.service';
import { AddUnitsDto } from './schema/unit.dto';
import { editUnitdto } from './schema/editUnit.dto';

@Controller('unit')
export class UnitController {
    constructor(private readonly unitService:UnitService ){}

    @Post(':id')
    async addunits(@Param('id') id:string, @Body() dto:AddUnitsDto) {
return this.unitService.addunits(id,dto)
    }
    @Get(':id')
    async getunitdetailed(@Param('id') id:string) {
return this.unitService.viewunit(id)
    }
    @Put(':id/edit')
    async editUnit(@Param('id') unitId: string, @Body() editUnitDto: editUnitdto){
      await this.unitService.editUnit(unitId, editUnitDto);
      return {message:'units updated',

    }
}
@Delete(':id')
async deleteunits(@Param('id') id:string){
    await this.unitService.deleteunits(id)
}
}
