import { Controller, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BatchesController } from './batches.controller';
import { BatchesService } from './batches.service';
import { BatchesEntity } from './entitiy/batches.entitiy';

@Module({
  providers: [BatchesService],
  controllers: [BatchesController],
  imports : [TypeOrmModule.forFeature([BatchesEntity])],
  exports : [TypeOrmModule]
})
export class BatchesModule {}
