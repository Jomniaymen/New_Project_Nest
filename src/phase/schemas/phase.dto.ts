import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreatePhaseDto {
  @IsNotEmpty()
  @IsNumber()
  numberOfUnits: number;
}
