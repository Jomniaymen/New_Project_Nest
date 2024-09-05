import { Module } from '@nestjs/common';
import { UnitController } from './unit.controller';
import { UnitService } from './unit.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Phase, PhaseSchema } from 'src/phase/schemas/phase.schema';
import { Unit, UnitSchema } from './schema/unit.schema';

@Module({
  imports:[MongooseModule.forFeature([{name:Unit.name,schema:UnitSchema}])],
  exports:[MongooseModule]
})
export class UnitModule {}
