import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { CreateScholarShipDto } from './dto/createScholarShip.dto';
import { UpdateScholarShipDto } from './dto/updateScholarShip.dto';
import { ScholarShip } from './entity/scholarship.entity';
import { ScholarshipService } from './scholarship.service';

@Controller('scholarship')
export class ScholarshipController {
    constructor(private readonly scholarShipService : ScholarshipService){}
    @Post('create')
    async createScholarShip(@Body() createScholarShipDto : CreateScholarShipDto){
        return await this.scholarShipService.createScholarShip(createScholarShipDto)
    }

    @Get()
    async findAll() : Promise<ScholarShip[]>{
        return await this.scholarShipService.findAll()
    }

    @Get(':id')
    async findOne(@Param('id') id : number) : Promise<ScholarShip>{
        return await this.scholarShipService.findOne(id)
    }

    @Patch(':id')
    async update(@Param('id') id : number, @Body() data : Partial<UpdateScholarShipDto>){
        return await this.scholarShipService.update(id,data)
    }
    
    @Delete(':id')
    async delete(@Param('id') id : number){
        return await this.scholarShipService.delete(id)
    }
}
