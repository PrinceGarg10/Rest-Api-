import { ApiProperty } from "@nestjs/swagger";
import { IsOptional } from "class-validator";

export class CreateScholarShipDto{
    scholarShipName : string;
    percentage : number;
    category : string;

}