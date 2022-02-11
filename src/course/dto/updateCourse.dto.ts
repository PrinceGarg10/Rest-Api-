import { BatchesEntity } from "src/batches/entitiy/batches.entitiy";
import { Center } from "src/center/entitiy/center.entity";
import { Course } from "../entitiy";

export class UpdateCourseDto{
    courseName : string; 
    // center : Center;
    centerId: number
    session : number;
    fees : number ;
    status : string;
    // batch : BatchesEntity[];
    // batchId : number;
 }