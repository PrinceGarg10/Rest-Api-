import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateBatchesDto } from './dto/createBatches.dto';
import { UpdateBatchesDto } from './dto/updatebatches.dto';
import { BatchesEntity } from './entitiy/batches.entitiy';

@Injectable()
export class BatchesService {
    constructor(@InjectRepository(BatchesEntity) private readonly batchesRepository : Repository<BatchesEntity>){}

    async createCenter(createBatchesDto : CreateBatchesDto){
        const newCenter = this.batchesRepository.create(createBatchesDto)
        return await this.batchesRepository.save(newCenter)

    }
    async  findAll() : Promise<BatchesEntity[]>{
        return await this.batchesRepository.find()
    }

    async findOne(id : number) : Promise<BatchesEntity>{
        return await this.batchesRepository.findOne({where: {id : id}})
    }

    async update( id  : number, data : Partial<UpdateBatchesDto>){
        await this.batchesRepository.update({id},data)
        return data
    }

    async destory(id : number){
        await this.batchesRepository.delete(id)
        return {delete : true}
    }
}

