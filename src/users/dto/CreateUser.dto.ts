import { ApiProperty } from "@nestjs/swagger";
import { IsOptional } from "class-validator";
import { Center } from "src/center/entitiy/center.entity";
import { Course } from "src/course/entitiy";

export class CreateUserDto  {
    name : string; 
    contact : number;
    email : string;
    role : string;
    // course : Course[];
    // center : Center;
    @ApiProperty()
    @IsOptional()
    centerId : number;
    @ApiProperty()
    @IsOptional()
    courseId: number
}