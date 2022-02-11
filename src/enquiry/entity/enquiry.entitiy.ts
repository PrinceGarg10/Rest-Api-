import { IsEmail, IsOptional } from "class-validator";
import { BatchesEntity } from "src/batches/entitiy/batches.entitiy";
import { Center } from "src/center/entitiy/center.entity";
import { Course } from "src/course/entitiy";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Enquiry{
    @PrimaryGeneratedColumn()
    id : number;

    @CreateDateColumn({
        type : Date
    })
    date : Date

    @Column()
    name : string;

    @Column({
        type : 'bigint'
    })
    contact : number

    @Column()
    @IsEmail()
    email : string;

    @Column({
        type : 'date'
    })
    DOB : Date

    // @Column()
    // courseName : string;

    @OneToOne(()=>Course, c =>c.enquiry)
    @JoinColumn()
    course ?: Course

    @Column()
    @IsOptional()
    courseId : number

    // @Column()
    // centerName : string

    @OneToOne(()=>Center, c=>c.enquiry)
    @JoinColumn()
    center ?: Center

    @Column()
    @IsOptional()
    centerId : number

    // @Column()
    // batch : string

    @OneToOne(()=>BatchesEntity, b=>b.enquiry)
    @JoinColumn()
    batch ?:BatchesEntity

    @Column()
    @IsOptional()
    batchId : number



    @Column()
    enquiryDetails : string;

  
}