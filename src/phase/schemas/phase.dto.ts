import { IsInt, IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class addphase {



  @IsNotEmpty()
  @IsInt()
  numberOfUnits: number;

  @IsNotEmpty()
  @IsNumber()
  unitSurfaceArea: number;

  @IsNotEmpty()
  @IsInt()
  numberLines: number;

  @IsNotEmpty()
  @IsInt()
  pondLine: number;

  @IsNotEmpty()
  @IsNumber()
  pondArea: number;
}
