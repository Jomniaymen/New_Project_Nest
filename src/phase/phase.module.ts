import { Module } from '@nestjs/common';
import { PhaseController } from './phase.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { UnitModule } from 'src/unit/unit.module';
import { PondModule } from 'src/pond/pond.module';
import { PhaseService } from './phase.service';
import { Phase, PhaseSchema } from './schemas/phase.schema';

@Module({
  imports:[MongooseModule.forFeature([{name:Phase.name,schema:PhaseSchema}]),  UnitModule,
  PondModule],
  providers: [PhaseService],
  controllers: [PhaseController],
  exports:[MongooseModule]
})
export class PhaseModule {}
