import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Pond } from '../../pond/schema/Pond.schema';
import { types } from 'util';

@Schema()
export class Unit extends Document {
  @Prop({ required: true })
  Units: string; 
  
  @Prop({ required: true })
  name: string; // "Ph1-U1", "Ph1-U2", etc.

  @Prop({ required: true })
  surfaceArea: number; // in hectares

  @Prop({ type: [{ type: Types.ObjectId, ref: 'Pond' }] })
  ponds: Pond[];
  static Units: any;
}

export const UnitSchema = SchemaFactory.createForClass(Unit);