import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

import { Document } from 'mongoose';


export  type UserDocument=Users & Document;
@Schema()
export class Users {

  @Prop({ required: true })
  name: string;


  @Prop({ required: true })
  age: number;


  @Prop({ required: true, })
  email: string;


  @Prop({ required: true })
  password: string;
  

  @Prop({ enum: ['admin', 'customer'], default: 'customer' })
  role: 'admin' | 'customer';
}

export const UserSchema = SchemaFactory.createForClass(Users);