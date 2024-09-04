import { Body, Controller, Post } from '@nestjs/common';
import { PhaseService } from './phase.service';
import { CreatePhaseDto } from './schemas/phase.dto';

@Controller('phase')
export class PhaseController {
  constructor(private readonly phaseService: PhaseService) {}

  @Post()
  create(@Body() createPhaseDto: CreatePhaseDto) {
    return this.phaseService.createPhase(createPhaseDto);
  }
}