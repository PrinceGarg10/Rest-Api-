import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CourseController } from './course.controller';
import { CourseService } from './course.service';
import { Course } from './entitiy';

@Module({
  imports : [TypeOrmModule.forFeature([Course])],
  exports : [TypeOrmModule],
  controllers: [CourseController],
  providers : [CourseService]

})
export class CourseModule {}
