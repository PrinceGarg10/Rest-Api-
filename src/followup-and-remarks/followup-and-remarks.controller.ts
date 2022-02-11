import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { CreateFollowupAndRemarksDto } from './dto/createFollowupAndRemarks.dto';
import { UpdateFollowupAndRemarksDto } from './dto/UpdateFollowupAndRemarks.dto';
import { FollowupAndRemarks } from './entitiy/followUpAndRemarks.entitiy';
import { FollowupAndRemarksService } from './followup-and-remarks.service';

@Controller('followup-and-remarks')
export class FollowupAndRemarksController {
    constructor(private readonly followupAndRemarksService : FollowupAndRemarksService){}
    @Post('create')
    async createFollowupAndRemarks(@Body() createFollowupAndRemarks : CreateFollowupAndRemarksDto){
        return await this.followupAndRemarksService.createFollowupAndRemarks(createFollowupAndRemarks)
    }

    @Get()
    async findAll() : Promise<FollowupAndRemarks[]>{
        return await this.followupAndRemarksService.findAll()
    }

    @Patch()
    async update(@Query('id') id : number ,@Body() data : Partial<UpdateFollowupAndRemarksDto>){
        return await this.followupAndRemarksService.update(id, data)
    }

    @Delete()
    async destory(@Query('id') id : number){
        return await this.followupAndRemarksService.destroy(id)
    }
}
