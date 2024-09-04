import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type PhaseDocument = Phase & Document;

@Schema()
export class Phase {
  @Prop({ required: true })
  phaseName: string;

  @Prop({ required: true })
  numberOfUnits: number;

  @Prop({ type: [String], required: true })
  units: string[];
}

export const PhaseSchema = SchemaFactory.createForClass(Phase);
