import { ApiProperty } from "@nestjs/swagger";
import { IsOptional } from "class-validator";

export class UpdateEnquiryDto{
    name  : string;
    contact : number;
    email : string; 
    DOB : Date;
    // course: Course;
    // center : Center;
    // batch : BatchesEntity
    // @ApiProperty()
    // @IsOptional()
    // courseId : number;

    // @ApiProperty()
    // @IsOptional()
    // centerId : number;

    // @ApiProperty()
    // @IsOptional()
    // batchId : number;
    enquiryDetails : string;
}