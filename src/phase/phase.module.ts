import { Module } from '@nestjs/common';
import { PhaseService } from './phase.service';
import { PhaseController } from './phase.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Phase, PhaseSchema } from './schemas/phase.schema';
import { UnitModule } from 'src/unit/unit.module';
import { PondModule } from 'src/pond/pond.module';

@Module({
  imports:[MongooseModule.forFeature([{name:Phase.name,schema:PhaseSchema}]),  UnitModule,
  PondModule],
  providers: [PhaseService],
  controllers: [PhaseController],
  exports:[MongooseModule]
})
export class PhaseModule {}
