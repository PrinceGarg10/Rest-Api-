import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCourseDto } from './dto/createCourse.dto';
import { UpdateCourseDto } from './dto/updateCourse.dto';
import { Course } from './entitiy';

@Injectable()
export class CourseService {
    constructor(@InjectRepository(Course) private readonly courseRepository : Repository<Course>){}

    async createCourse(createCourseDto : CreateCourseDto){
        const newCourse  = this.courseRepository.create(createCourseDto)
        return await this.courseRepository.save(newCourse);
    }

    async findAll (): Promise<Course[]>{
        return await this.courseRepository.find();
    }
    async findOne(id : number): Promise<Course>{
        return await this.courseRepository.findOne({where : {id : id}, relations:['students','batches']});
        // return await this.courseRepository.findOne(id, {relations:['batches']});
    }

    async update(id : number, data : Partial<UpdateCourseDto>){
        console.log("data", {data});
        
        await this.courseRepository.update({id}, data)
        return data;
    }

    async destroy(id :number) {
        await this.courseRepository.delete(id)
        return {deleted : true};
    }

    async findByCourse(courseName : string): Promise<Course[]>{   
        const findStuents =  await this.courseRepository.find({where : {courseName : courseName}});
        return findStuents
    }
}
