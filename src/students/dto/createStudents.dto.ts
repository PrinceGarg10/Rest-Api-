import { ApiProperty } from "@nestjs/swagger";
import { IsOptional } from "class-validator";
import { BatchesEntity } from "src/batches/entitiy/batches.entitiy";
import { Course } from "src/course/entitiy";

export class CreateStudentDto{
    name : string;
    contact : number;
    email : string;
    address : string;
    fatherName : string;
    fatherContact : number;
    fatherOccupation : string;
    motherName : string;
    motherContact : number;
    motherOccupation: string;

    @ApiProperty()
    @IsOptional()
    course  : Course;

    @ApiProperty()
    @IsOptional()
    courseId: number

    batch : BatchesEntity;

    @ApiProperty()
    @IsOptional()
    scholarshipsId: number

    @ApiProperty()
    @IsOptional()
    batchId: number
    // userName : string;
    // password : string;

}