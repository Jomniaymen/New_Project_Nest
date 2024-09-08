import { IsInt, IsNotEmpty, isNumber, IsNumber, IsOptional, IsString } from 'class-validator';

export class addphase {



  @IsNotEmpty()
  @IsInt()
  numberOfUnits: number;

  @IsNotEmpty()
  @IsNumber()
  unitSurfaceArea: number;

  @IsNotEmpty()
  @IsNumber()
  numberLines: number;

  @IsNotEmpty()
  @IsNumber()
  pondLine: number;

  @IsNotEmpty()
  @IsNumber()
  pondArea: number;
}
