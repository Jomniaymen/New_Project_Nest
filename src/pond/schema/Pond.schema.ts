import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@Schema()
export class Pond extends Document {
  @Prop({ required: true })
  name: string; 

  @Prop({ required: true })
  area: number; 

  @Prop({
  })
  pondLine:number;
  @Prop({
  })
  numberLines:number;
 
  @Prop({ type: [{type:Types.ObjectId, ref: 'Unit', required: true }]})
  unit: Types.ObjectId;
}


export const PondSchema = SchemaFactory.createForClass(Pond);
