import { Module } from '@nestjs/common';
import { UnitController } from './unit.controller';
import { UnitService } from './unit.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Unit, UnitSchema } from './schema/unit.schema';
import { Phase, PhaseSchema } from 'src/phase/schemas/phase.schema';
import { Pond, PondSchema } from 'src/pond/schema/Pond.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Unit.name, schema: UnitSchema },
      {name:Phase.name ,schema:PhaseSchema},
      {name:Pond.name,schema:PondSchema }
    ]),
  ],
  providers: [UnitService],
  controllers: [UnitController],
  exports: [MongooseModule],  
})
export class UnitModule {}
