import { Body, Controller, Delete, Get, HttpStatus, Param, Patch, Post } from '@nestjs/common';
import { CreateCourseDto } from 'src/course/dto/createCourse.dto';
import { UpdateCourseDto } from 'src/course/dto/updateCourse.dto';
import { CreateStudentDto } from './dto/createStudents.dto';
import { UpdateStudentDto } from './dto/updateStudents.dto';
import { Student } from './entitiy/student.entity';
import { StudentsService } from './students.service';

@Controller('students')
export class StudentsController {
    constructor(private readonly studentsServie : StudentsService){}
    @Post('create')
    async createStudent(@Body() createStudentDto : CreateStudentDto){
        return await this.studentsServie.createStudent(createStudentDto);
    }

    @Get()
    async findAll() : Promise<Student []>{
        return await this.studentsServie.findAll()
    }

    @Get(':id')
    async findOne(@Param('id') id : number) : Promise<Student>{
        return await this.studentsServie.findOne(id)
    }

    @Patch(':id')
    async updateStudent(@Param('id') id : number, @Body() data : Partial< UpdateStudentDto>){
        return await this.studentsServie.update(id, data)
    }

    @Delete(':id')
    async deleteStudent(@Param('id') id : number){
        await this.studentsServie.destroy(id)
        return {
            statusCode : HttpStatus.OK,
            message : 'Student deleted successfully'
        }
    }

    @Post('chekauth')
    async chekAuth(  @Body('userName')  userName  : string, @Body('password') password : string ) : Promise<any>{
        // console.log("username and passowrd",{ userName, password})
        return await this.studentsServie.chekAuth(userName,password)
    }

    @Patch('/active/:id')
    async activeAndDeactiveStudent(@Param('id') id : number, ){
        return await this.studentsServie.activeAndDeactiveStudent(id)
    }

    // @Patch('/deactive/:id')
    // async deActiveStudent(@Param('id') id : number, ){
    //     return await this.studentsServie.deActiveStudent(id)
    // }


}
