import { Body, Controller, Delete, Get, HttpStatus, Param, Patch, Post } from '@nestjs/common';
import { CenterService } from './center.service';
import { CreateCenterDto } from './dto/createCenter.dto';
import { UpdateCenterDto } from './dto/updateCenter.dto';
import { Center } from './entitiy/center.entity';

@Controller('center')
export class CenterController {
    constructor(private readonly centerService : CenterService){}

    @Post('create')
    async createCenter(@Body() createCenterDto : CreateCenterDto){
        return await this.centerService.createCenter(createCenterDto)
    }

    @Get()
    async findAll() : Promise<Center[]>{
        return await this.centerService.findAll()
    }

    @Get(':id')
    async findOne(@Param('id') id : number) : Promise<Center>{
        return await this.centerService.findOne(id)
    }

    @Patch(':id')
    async update(@Param('id') id : number, @Body() data : Partial<UpdateCenterDto>){
        return await this.centerService.update(id, data)
    }

    @Delete(':id')
    async destory(@Param('id') id : number){
         await this.centerService.destory(id)
         return {
             statusCode : HttpStatus.OK,
             message : 'Center deleted successfully'
         }
    }
}
