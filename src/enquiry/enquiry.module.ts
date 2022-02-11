import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EnquiryController } from './enquiry.controller';
import { EnquiryService } from './enquiry.service';
import { Enquiry } from './entity/enquiry.entitiy';

@Module({
  controllers : [EnquiryController],
  imports  : [TypeOrmModule.forFeature([Enquiry])],
  exports : [TypeOrmModule],
  providers: [EnquiryService]
})
export class EnquiryModule {}
