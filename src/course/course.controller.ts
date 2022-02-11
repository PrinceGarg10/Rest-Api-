import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Logger, Param, Patch, Post } from '@nestjs/common';
import { CourseService } from './course.service';
import { CreateCourseDto } from './dto/createCourse.dto';
import { UpdateCourseDto } from './dto/updateCourse.dto';
import { Course } from './entitiy';

@Controller('course')
export class CourseController {
    constructor(private readonly courseServie : CourseService){}

    @Post('create')
    async createCourse(@Body() createCourseDto : CreateCourseDto){
        return await this.courseServie.createCourse(createCourseDto)
    }

    @Get()
    async findAll():Promise<Course[]>{
        return await this.courseServie.findAll()
    }

    @Get(':id')
    async findOne(@Param('id') id : number) : Promise<Course>{
        return await this.courseServie.findOne(id)
    }

    @Patch(':id')
    async updateCourse(@Param('id') id : number, @Body() data : Partial<UpdateCourseDto>){
        return await this.courseServie.update(id, data)
    }

    @Delete(':id')
    async delete(@Param('id') id : number){
        await this.courseServie.destroy(id);
        return {
            statusCode   : HttpStatus.OK,
            message: 'Course deleted successfully',
        }
    }

    @Get('/name/:courseName')
    async findByCourse(@Param('courseName') courseName : string):Promise<Course[]>{
        return await this.courseServie.findByCourse(courseName)

    }
}
