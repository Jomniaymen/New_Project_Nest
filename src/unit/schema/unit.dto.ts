import { Prop } from "@nestjs/mongoose";
import { IsNumber, IsString, isString } from "class-validator";


export class untidto{
   @IsString()
    phaseName: string;
  
    @IsNumber()
    @Prop({ required: true })
    numberOfUnits: number;
  
    @Prop({ type: [String], required: true })
    ponds: string[];
  }

