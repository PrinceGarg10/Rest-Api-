import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ScholarShip } from './entity/scholarship.entity';
import { ScholarshipController } from './scholarship.controller';
import { ScholarshipService } from './scholarship.service';

@Module({
  imports : [TypeOrmModule.forFeature([ScholarShip])],
  exports : [TypeOrmModule],
  providers : [ScholarshipService],
  controllers: [ScholarshipController]
})
export class ScholarshipModule {}
