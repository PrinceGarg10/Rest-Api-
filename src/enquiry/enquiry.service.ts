import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Between, Like, Repository } from 'typeorm';
import { CreateEnquiryDto } from './dto/createEnquiry.dto';
import { UpdateEnquiryDto } from './dto/updateEnquiry.dto';
import { Enquiry } from './entity/enquiry.entitiy';

@Injectable()
export class EnquiryService {
    constructor(@InjectRepository(Enquiry) private readonly enquiryRepository: Repository<Enquiry>) { }
    async createEnquiry(createEnquiryDto: CreateEnquiryDto) {
        const newEnquiry = this.enquiryRepository.create(createEnquiryDto)
        return await this.enquiryRepository.save(newEnquiry)
    }

    async findAll(): Promise<Enquiry[]> {
        return await this.enquiryRepository.find({relations :['course','center','batch']})
    }

    async findOne(id: number): Promise<Enquiry> {
        return await this.enquiryRepository.findOne({ where: { id: id },relations :['course','center','batch'] })
    }

    async destroy(id: number) {
        await this.enquiryRepository.delete(id)
        return { delete: true }
    }

    async update(id: number, data: Partial<UpdateEnquiryDto>) {
        await this.enquiryRepository.update({ id }, data)
        return data;
    }

    async findByCourse(courseName: string): Promise<Enquiry[]> {
        const findEnquiryByCourse = await this.enquiryRepository.find({ where: { courseName: courseName } });
        return findEnquiryByCourse
    }


    async allOneFilter(courseName : string, centerName : string, name : string, contact : number): Promise<Enquiry[]>{   
        const findEnquiryByCourse =  await this.enquiryRepository.find({where : [{courseName : courseName},
            {centerName : centerName},
                 {name : name, contact : contact},
                 {name : Like(`%${name}%`)},
                  {contact : contact}]});
        return findEnquiryByCourse
    } 

    async findByCenter(centerName: string): Promise<Enquiry[]> {
        const findEnquiryByCenter = await this.enquiryRepository.find({ where: { centerName: centerName } });
        return findEnquiryByCenter
    }

    async findByDate(date_start: string, date_end: string): Promise<Enquiry[]> {
        // console.log("date_start = ", date_start)
        const findEnquiryByDate = await this.enquiryRepository.find({ where: { date: Between(date_start, date_end) } });
        return findEnquiryByDate
    }
}
