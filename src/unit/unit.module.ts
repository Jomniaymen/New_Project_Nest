import { Module } from '@nestjs/common';
import { UnitController } from './unit.controller';
import { UnitService } from './unit.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Phase, PhaseSchema } from 'src/phase/schemas/phase.schema';

@Module({
  imports:[MongooseModule.forFeature([{name:Phase.name,schema:PhaseSchema}])],
  controllers: [UnitController],
  providers: [UnitService]
})
export class UnitModule {}
