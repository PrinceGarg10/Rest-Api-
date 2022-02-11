import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CenterController } from './center.controller';
import { CenterService } from './center.service';
import { Center } from './entitiy/center.entity';

@Module({
  imports : [TypeOrmModule.forFeature([Center])],
  exports : [TypeOrmModule],
  providers : [CenterService],
  controllers: [CenterController]

})
export class CenterModule {}
