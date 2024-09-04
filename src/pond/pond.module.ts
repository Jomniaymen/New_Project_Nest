import { Module } from '@nestjs/common';
import { PondService } from './pond.service';
import { PondController } from './pond.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Pond, PondSchema } from './schema/Pond.schema';

@Module({
  imports:[MongooseModule.forFeature([{name:Pond.name,schema:PondSchema}])],
  providers: [PondService],
  controllers: [PondController]
})
export class PondModule {}
