import { IsOptional } from "class-validator";
import { Sign } from "crypto";
import { Course } from "src/course/entitiy";
import { Enquiry } from "src/enquiry/entity/enquiry.entitiy";
import { Student } from "src/students/entitiy/student.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('batch')
export class BatchesEntity{
    @PrimaryGeneratedColumn()
    id : number;

    @Column()
    name : string;

    @CreateDateColumn()
    createdAt: string

    @UpdateDateColumn()
    updatedAt: string

    @ManyToOne(() => Course, c => c.batches)
    @JoinColumn()
    course?: Course

    @Column({nullable: true})
    @IsOptional()
    courseId?: number

    @OneToMany(()=>Student,s=>s.batch)
    student?:Student

    @OneToOne(()=>Enquiry, e=>e.batch)
    enquiry ?: Enquiry
}