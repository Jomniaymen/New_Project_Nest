import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Pond } from '../../pond/schema/Pond.schema';
import { types } from 'util';

@Schema()
export class Unit extends Document {
  @Prop({ required: true })
  Units: string; 
  
  @Prop({ required: true })
  name: string; 

  @Prop({ })
  surfaceArea: number; 
  @Prop({  })
  numberLines: number; 
  @Prop({  })
  pondLine: number; 
  
  @Prop({ type: [{ type: Types.ObjectId, ref: 'Unit' }] }) 
  ponds: Pond[];

}


export const UnitSchema = SchemaFactory.createForClass(Unit);