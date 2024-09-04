import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Pond extends Document {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  pondArea: number;
}

export const PondSchema = SchemaFactory.createForClass(Pond);
