import { BadRequestException, HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ScholarShip } from 'src/scholarship/entity/scholarship.entity';
import { Repository } from 'typeorm';
import { CreateStudentDto } from './dto/createStudents.dto';
import { UpdateStudentDto } from './dto/updateStudents.dto';
import { Student } from './entitiy/student.entity';

@Injectable()
export class StudentsService {
    constructor(@InjectRepository(Student) private readonly studentRepository: Repository<Student>,
                @InjectRepository(ScholarShip) private readonly scholarshipRepository : Repository<ScholarShip>) {
    }

    // makeid(length) {
    //     var result = '';
    //     var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    //     var charactersLength = characters.length;
    //     for (var i = 0; i < length; i++) {
    //         result += characters.charAt(Math.floor(Math.random() *
    //             charactersLength));
    //     }
    //     return result;
    // }

    getRandomInt() {
        let min = Math.ceil(1);
        let max = Math.floor(100000000);
        return Math.floor(Math.random() * (max - min + 1)) + min
    }

    randomGenerate(props) {
        const { name, id } = props;
        return name + this.getRandomInt()
    }


    async createStudent(createStudentDto: CreateStudentDto) {
        let newStudent = this.studentRepository.create(createStudentDto)
        const randomUserName = this.randomGenerate({ name: newStudent.name, id: newStudent.id });
        // console.log({ randomUser });
        const scholarship_data = await this.scholarshipRepository.findOne(createStudentDto.scholarshipsId)
        if (!scholarship_data) throw new BadRequestException('No Scholarship')
        newStudent = await this.studentRepository.save(newStudent);

        let student_data = await this.studentRepository.findOne(newStudent.id, { relations: ['scholarships','course','batch'] })
        student_data.scholarships.push(scholarship_data)

        return await this.studentRepository.save({ password: randomUserName, userName: randomUserName, ...student_data })
    }

    async findAll(): Promise<Student[]> {
        return await this.studentRepository.find()
    }

    async findOne(id: number): Promise<Student> {
        return await this.studentRepository.findOne({ where: { id: id } , relations:['course','course.center','batch']})
        // return await this.studentRepository.findOne(id, {relations: ['course']})
    }

    async update(id: number, data: Partial<UpdateStudentDto>) {
        await this.studentRepository.update({ id }, data);
        return data;
    }

    async destroy(id: number) {
        await this.studentRepository.delete(id)
        return { deleted: true };
    }

    async chekAuth(userName: string, password: string): Promise<Student> {
        const currntUser =  await this.studentRepository.findOne({
            where: [
                { userName: userName, password : password },
                
            ]
        })
        if(currntUser){
            return currntUser
        }
        else{
            // return "Username Or Password Incorrect! "
           throw new HttpException({
               status : HttpStatus.FORBIDDEN,
               error : "Username Or Password Incorrect!"
           },HttpStatus.FORBIDDEN)
            

        }
        // console.log("curntuser", currntUser);
        // return 'prince'

        // if (this.studentRepository.findOne({
        //     where: [
        //         { userName: userName },
        //     ]
        // })) {
        //     const result = 'success'
        //     return result
        // }
        // else {
        //     const result = 'unsucess'
        //     return result
        // }

    }

    async activeAndDeactiveStudent(id: number, ) {
        const currntUser =  await this.studentRepository.findOne({
            where: [
                { id: id},
                
            ]
        })
        if(currntUser){
            if(currntUser.active){
                await this.studentRepository.update({ id }, {active : false});
                return "Student Deactive Successfully";


            }else{
                await this.studentRepository.update({ id }, {active : true});
                return "Student Active Successfully";

            }
            
        }
        else{
            return "Please Chek Your Id. Student Not Found ! "
        }
    }

    // async deActiveStudent(id: number, ) {
    //     const currntUser =  await this.studentRepository.findOne({
    //         where: [
    //             { id: id},
                
    //         ]
    //     })
    //     if(currntUser){
    //         await this.studentRepository.update({ id }, {active : false});
    //         return "Student Deactive Successfully";
    //     }
    //     else{
    //         return "Please Chek Your Id. Student Not Found ! "
    //     }
    // }
}
