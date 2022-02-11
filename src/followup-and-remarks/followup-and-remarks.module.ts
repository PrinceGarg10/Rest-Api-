import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FollowupAndRemarks } from './entitiy/followUpAndRemarks.entitiy';
import { FollowupAndRemarksController } from './followup-and-remarks.controller';
import { FollowupAndRemarksService } from './followup-and-remarks.service';

@Module({
  controllers: [FollowupAndRemarksController],
  imports : [TypeOrmModule.forFeature([FollowupAndRemarks])],
  exports : [TypeOrmModule],
  providers  : [FollowupAndRemarksService]
})
export class FollowupAndRemarksModule {}
