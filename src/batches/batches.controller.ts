import { Body, Controller, Delete, Get, HttpStatus, Param, Patch, Post } from '@nestjs/common';
import { BatchesService } from './batches.service';
import { UpdateBatchesDto } from './dto/updatebatches.dto';
import { BatchesEntity } from './entitiy/batches.entitiy';

@Controller('batches')
export class BatchesController {
    constructor(private readonly batchesService : BatchesService){}

    @Post('create')
    async createCenter(@Body() batchesService : BatchesService){
        return await this.batchesService.createCenter(BatchesService)
    }

    @Get()
    async findAll() : Promise<BatchesEntity[]>{
        return await this.batchesService.findAll()
    }

    @Get(':id')
    async findOne(@Param('id') id : number) : Promise<BatchesEntity>{
        return await this.batchesService.findOne(id)
    }

    @Patch(':id')
    async update(@Param('id') id : number, @Body() data : Partial<UpdateBatchesDto>){
        return await this.batchesService.update(id, data)
    }

    @Delete(':id')
    async destory(@Param('id') id : number){
         await this.batchesService.destory(id)
         return {
             statusCode : HttpStatus.OK,
             message : 'Center deleted successfully'
         }
    }
}
