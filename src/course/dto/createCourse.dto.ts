import { Center } from "src/center/entitiy/center.entity";
import { Course } from "../entitiy";

export class CreateCourseDto{
    courseName : string; 
    // center : Center;
    centerId: number
    session : number;
    fees : number ;
    status : string;
    // batch : string;
    isActive: boolean
}