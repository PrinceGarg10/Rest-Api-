import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Course } from 'src/course/entitiy';
import { User } from 'src/users/typeorm';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

@Module({
  imports : [TypeOrmModule.forFeature([User,Course])],
  exports : [TypeOrmModule],
  controllers: [UsersController],
  providers: [UsersService]
})
export class UsersModule {}
