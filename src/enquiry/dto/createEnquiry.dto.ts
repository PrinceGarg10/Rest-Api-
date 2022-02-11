import { ApiProperty } from "@nestjs/swagger";
import { IsOptional } from "class-validator";
import { BatchesEntity } from "src/batches/entitiy/batches.entitiy";
import { Center } from "src/center/entitiy/center.entity";
import { Course } from "src/course/entitiy";

export class CreateEnquiryDto{
    name  : string;
    contact : number;
    email : string; 
    DOB : Date;
    // course: Course;
    // center : Center;
    // batch : BatchesEntity
    @ApiProperty()
    @IsOptional()
    courseId : number;

    @ApiProperty()
    @IsOptional()
    centerId : number;

    @ApiProperty()
    @IsOptional()
    batchId : number;
    enquiryDetails : string;
    
}