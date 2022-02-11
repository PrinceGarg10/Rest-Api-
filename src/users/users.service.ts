import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Course } from 'src/course/entitiy';
import { User } from 'src/users/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/CreateUser.dto';
import { UpdateUserDto } from './dto/updateUser.dto';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>,
        @InjectRepository(Course)
        private readonly courseRepository: Repository<Course>
    ) { }
    async createUser(createUserDto: CreateUserDto) { 
        console.log("add staff", createUserDto);

        console.log("courseId = ", createUserDto.courseId)

        // let staff_data = Object.assign(new User(), createUserDto)
        // console.log("staff_data = ", staff_data)

        const course_data = await this.courseRepository.findOne(createUserDto.courseId)
        console.log("course_data = ", course_data)

        if (!course_data) throw new BadRequestException('No Course')

        let newUser = this.userRepository.create(createUserDto)
        console.log("newUser = ", newUser)
        newUser = await this.userRepository.save(newUser);
        console.log("newUser = ", newUser)

        let user_data = await this.userRepository.findOne(newUser.id, { relations: ['courses','center'] })
        console.log("user_data = ", user_data)
        user_data.courses.push(course_data)

        return await this.userRepository.save(user_data);
    }
    async findAll(): Promise<User[]> {
        return await this.userRepository.find();
    }

    async findOne(id: number): Promise<User> {
        return await this.userRepository.findOne({ where: { id: id }, relations: ['courses','center'] });
    }

    async update(id: number, data: Partial<UpdateUserDto>) {
        await this.userRepository.update({ id }, data);
        return data
        // return this.userRepository.findOne({ id });
    }


    async destroy(id: number) {
        await this.userRepository.delete({ id });
        return { deleted: true };
    }
}
