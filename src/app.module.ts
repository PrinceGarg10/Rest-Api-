import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import entities, { User } from './users/typeorm';
import { UsersService } from './users/users.service';
import { StudentsService } from './students/students.service';
import { StudentsController } from './students/students.controller';
import { StudentsModule } from './students/students.module';
import { CourseService } from './course/course.service';
import { CourseModule } from './course/course.module';
import courseEntities, { Course } from './course/entitiy/index';
import { Student } from './students/entitiy/student.entity';
import { CenterService } from './center/center.service';
import { CenterModule } from './center/center.module';
import { Center } from './center/entitiy/center.entity';
import { EnquiryController } from './enquiry/enquiry.controller';
import { EnquiryModule } from './enquiry/enquiry.module';
import { Enquiry } from './enquiry/entity/enquiry.entitiy';
import { ScholarshipService } from './scholarship/scholarship.service';
import { ScholarshipModule } from './scholarship/scholarship.module';
import { ScholarShip } from './scholarship/entity/scholarship.entity';
import { FollowupAndRemarksService } from './followup-and-remarks/followup-and-remarks.service';
import { FollowupAndRemarksModule } from './followup-and-remarks/followup-and-remarks.module';
import { FollowupAndRemarks } from './followup-and-remarks/entitiy/followUpAndRemarks.entitiy';
import { BatchesController } from './batches/batches.controller';
import { BatchesModule } from './batches/batches.module';
import { BatchesEntity } from './batches/entitiy/batches.entitiy';
@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'sqluser',
    password: 'f3q3rq@F@F@F!#@g314g',
    database: 'testone',
    entities : [User, Course, Student, Center, Enquiry,ScholarShip, FollowupAndRemarks, BatchesEntity],
    synchronize: true,
  }), UsersModule, StudentsModule, CourseModule, CenterModule, EnquiryModule, ScholarshipModule, FollowupAndRemarksModule, BatchesModule],
  controllers: [AppController, StudentsController],
  providers: [AppService, UsersService, StudentsService, CourseService, CenterService, ScholarshipService, FollowupAndRemarksService],
})
export class AppModule {}
