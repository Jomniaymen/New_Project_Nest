import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Phase, PhaseDocument } from './schemas/phase.schema';
import { CreatePhaseDto } from './schemas/phase.dto';

@Injectable()
export class PhaseService {
  constructor(@InjectModel(Phase.name) private readonly phaseModel: Model<PhaseDocument>) {}

  async createPhase(dto: CreatePhaseDto) {
    const phaseCount = await this.phaseModel.countDocuments();
    const phaseNumber = phaseCount + 1;
    const phaseName = `Ph${phaseNumber}`;

   
    const unitNames = Array.from({ length: dto.numberOfUnits }, (_, i) => `Unit${i + 1}`);
    
    const newPhase = new this.phaseModel({
      phaseName,
      numberOfUnits: dto.numberOfUnits,
      units: unitNames,
    });

    return newPhase.save().then(() => ({
      message: 'new phases created',
      phase: newPhase,
    }));
  }
}
