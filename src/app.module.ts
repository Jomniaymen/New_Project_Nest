import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

import { PhaseModule } from './phase/phase.module';
import { UnitModule } from './unit/unit.module';
import { PondModule } from './pond/pond.module';

@Module({
  imports: [ConfigModule.forRoot(),MongooseModule.forRoot(process.env.DATABASE_URL), PhaseModule, UnitModule, PondModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
