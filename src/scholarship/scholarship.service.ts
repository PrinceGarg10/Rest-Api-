import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateScholarShipDto } from './dto/createScholarShip.dto';
import { UpdateScholarShipDto } from './dto/updateScholarShip.dto';
import { ScholarShip } from './entity/scholarship.entity';

@Injectable()
export class ScholarshipService {
    constructor(@InjectRepository(ScholarShip) private readonly scholarShipRepository : Repository<ScholarShip>){}
    async createScholarShip(createScholarShipDto : CreateScholarShipDto){
        const newScholarship = this.scholarShipRepository.create(createScholarShipDto)
        return  await this.scholarShipRepository.save(newScholarship)
    }

    async findAll() : Promise<ScholarShip[]>{
        return await this.scholarShipRepository.find()
    }

    async findOne(id : number) : Promise<ScholarShip>{
        return await this.scholarShipRepository.findOne({where : {id : id}})
    }

    async update(id : number, data : Partial<UpdateScholarShipDto>){
        await this.scholarShipRepository.update({id},data)
        return data;
    }

    async delete(id : number){
        await this.scholarShipRepository.delete({id})
        return {delete : true}

    }
}
