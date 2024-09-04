import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { MongooseModule } from '@nestjs/mongoose';
import {  Users, UserSchema } from './User.sechma';

@Module({
  imports:[MongooseModule.forFeature([{name:Users.name,schema:UserSchema}])],
  providers: [UserService],
  controllers: [UserController]
})
export class UserModule {}
