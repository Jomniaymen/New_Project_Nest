// add-units.dto.ts
import { IsNumber, IsNotEmpty } from 'class-validator';

export class AddUnitsDto {
    @IsNumber()
    @IsNotEmpty()
    numberOfUnits: number;

    @IsNumber()
    @IsNotEmpty()
    unitSurfaceArea: number; 

    @IsNumber()
    @IsNotEmpty()
    numberLines: number;

    @IsNumber()
    @IsNotEmpty()
    pondLine: number;

    @IsNumber()
    @IsNotEmpty()
    pondArea: number; 
}