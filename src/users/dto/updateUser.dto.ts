import { ApiProperty } from "@nestjs/swagger";
import { IsOptional } from "class-validator";

export class UpdateUserDto{
   name : string; 
   contact : number;
   email : string;
   role : string;
   
   @ApiProperty()
   @IsOptional()
   centerId : number
   // course : string;
   // center : string;
   // password : string;

}