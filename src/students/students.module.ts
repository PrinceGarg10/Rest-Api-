import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ScholarShip } from 'src/scholarship/entity/scholarship.entity';
import { Student } from './entitiy/student.entity';
import { StudentsController } from './students.controller';
import { StudentsService } from './students.service';

@Module({
  controllers: [StudentsController],
  imports : [TypeOrmModule.forFeature([Student,ScholarShip])],
  exports : [TypeOrmModule],
  providers : [StudentsService]
})
export class StudentsModule {}
