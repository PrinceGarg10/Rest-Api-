import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCenterDto } from './dto/createCenter.dto';
import { UpdateCenterDto } from './dto/updateCenter.dto';
import { Center } from './entitiy/center.entity';

@Injectable()
export class CenterService {
    constructor(@InjectRepository(Center) private readonly centerRepository : Repository<Center>){}

    async createCenter(createCenterDto : CreateCenterDto){
        const newCenter = this.centerRepository.create(createCenterDto)
        return await this.centerRepository.save(newCenter)

    }
    async  findAll() : Promise<Center[]>{
        return await this.centerRepository.find()
    }

    async findOne(id : number) : Promise<Center>{
        return await this.centerRepository.findOne({where: {id : id}, relations:['courses']})
    }

    async update( id  : number, data : Partial<UpdateCenterDto>){
        await this.centerRepository.update({id},data)
        return data
    }

    async destory(id : number){
        await this.centerRepository.delete(id)
        return {delete : true}
    }
}
