import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { PhaseService } from './phase.service';
import { addphase } from './schemas/phase.dto';
import { create } from 'domain';
import { get } from 'http';

@Controller('phase')
export class PhaseController {
  constructor(private readonly phaseService: PhaseService) {}

  @Post()
  create(@Body() createPhaseDto: addphase) {
   const phase= this.phaseService.createPhase(createPhaseDto);
    return {
      message: 'New phase is created',
      phase,
  }
  }
@Get(':id')

PhaseDetailed(@Param('id') id:string){
const phasedetaied= this.phaseService.phasedetaied(id);
return phasedetaied
}
@Delete(':id')
Deletephase(@Param('id') id:string ){
  const phasedeleted=this.phaseService.deletephase(id);
  return {
    message:'phase deleted',
    phasedeleted
  }
}
}