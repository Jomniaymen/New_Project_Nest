import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose'; // Import Types from mongoose
import { Unit } from '../../unit/schema/unit.schema';

@Schema()
export class Phase extends Document {
  @Prop()
  name: string; 

  @Prop({ type: [{ type: Types.ObjectId, ref: 'Unit' }] }) 
  units: Unit[];
}

export const PhaseSchema = SchemaFactory.createForClass(Phase);
