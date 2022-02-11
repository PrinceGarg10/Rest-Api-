import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateFollowupAndRemarksDto } from './dto/createFollowupAndRemarks.dto';
import { UpdateFollowupAndRemarksDto } from './dto/UpdateFollowupAndRemarks.dto';
import { FollowupAndRemarks } from './entitiy/followUpAndRemarks.entitiy';

@Injectable()
export class FollowupAndRemarksService {
    constructor(@InjectRepository(FollowupAndRemarks) private readonly followupAndRemarksRepository : Repository<FollowupAndRemarks>){}

    async createFollowupAndRemarks(createFollowupAndRemarksDto : CreateFollowupAndRemarksDto){
        const newFollowAndRemarks = this.followupAndRemarksRepository.create(createFollowupAndRemarksDto)
        return await this.followupAndRemarksRepository.save(createFollowupAndRemarksDto)
    }

    async findAll() : Promise<FollowupAndRemarks[]>{
        return await this.followupAndRemarksRepository.find()
    }

    async update(id : number, data : Partial<UpdateFollowupAndRemarksDto>) {
        await this.followupAndRemarksRepository.update({id},data)
        return data;

    }

    async destroy(id : number){
        await this.followupAndRemarksRepository.delete(id)
        return {delete : true}
    }
}
