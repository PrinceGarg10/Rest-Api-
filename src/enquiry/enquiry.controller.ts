import { Body, Controller, Delete, Get, HttpStatus, Param, Patch, Post, Query } from '@nestjs/common';
import { CreateEnquiryDto } from './dto/createEnquiry.dto';
import { UpdateEnquiryDto } from './dto/updateEnquiry.dto';
import { EnquiryService } from './enquiry.service';
import { Enquiry } from './entity/enquiry.entitiy';

@Controller('enquiry')
export class EnquiryController {
    constructor(private readonly enquiryServie: EnquiryService) { }

    @Post('create')
    async createCourse(@Body() createEnquiryDto: CreateEnquiryDto) {
        return await this.enquiryServie.createEnquiry(createEnquiryDto)
    }

    @Get()
    async findAll(): Promise<Enquiry[]> {
        return await this.enquiryServie.findAll()
    }

    @Get('/findone/:id')
    async findOne(@Param('id') id: number): Promise<Enquiry> {
        return await this.enquiryServie.findOne(id)
    }

    @Patch(':id')
    async updateCourse(@Param('id') id: number, @Body() data: Partial<UpdateEnquiryDto>) {
        return await this.enquiryServie.update(id, data)
    }

    @Delete(':id')
    async delete(@Param('id') id: number) {
        await this.enquiryServie.destroy(id);
        return {
            statusCode: HttpStatus.OK,
            message: 'Enquiry deleted successfully',
        }
    }

    @Get('/name/:courseName')
    async findByCourse(@Param('courseName') courseName: string): Promise<Enquiry[]> {
        return await this.enquiryServie.findByCourse(courseName)

    }

    @Get('/filter/')
    async allOneFilter(@Query('courseName') courseName: string,@Query('centerName') centerName: string ,@Query('name') name : string, @Query('contact') contact : number): Promise<Enquiry[]> {
        return await this.enquiryServie.allOneFilter(courseName,centerName,name,contact)

    }

    @Get('/centerName/:centerName')
    async findByCenterName(@Param('centerName') centerName: string): Promise<Enquiry[]> {
        return await this.enquiryServie.findByCenter(centerName)

    }

    @Get('date')
    async findByDate(@Body() date: { date_start: string, date_end: string }): Promise<Enquiry[]> {
        // console.log("here");
        // let { date_start, date_end } = date
        // console.log("datestart", date.date_start,date.date_end);
        return await this.enquiryServie.findByDate(date.date_start, date.date_end)

    }
}

