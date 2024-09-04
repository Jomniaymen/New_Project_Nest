import { Module } from '@nestjs/common';
import { PhaseService } from './phase.service';
import { PhaseController } from './phase.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Phase, PhaseSchema } from './schemas/phase.schema';

@Module({
  imports:[MongooseModule.forFeature([{name:Phase.name,schema:PhaseSchema}])],
  providers: [PhaseService],
  controllers: [PhaseController]
})
export class PhaseModule {}
