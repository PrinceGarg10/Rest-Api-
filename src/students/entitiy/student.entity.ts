import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import {IsEmail, IsOptional} from "class-validator";
import { Course } from "src/course/entitiy";
import { ScholarShip } from "src/scholarship/entity/scholarship.entity";
import { BatchesEntity } from "src/batches/entitiy/batches.entitiy";

@Entity()
export class Student{
    @PrimaryGeneratedColumn({
        type : 'bigint'
    })
    id : number;

    @Column({
        nullable : false,
        default : ''
    })
    name : string;

    @Column({
        type : 'bigint',
        default : 0
    })
    contact : number;

    @Column()
    @IsEmail()
    email : string;

    @Column()
    address : string;

    @Column()
    fatherName : string; 

    @Column({
        type : 'bigint',
        default : 0
    })
    fatherContact : number;

    @Column()
    fatherOccupation : string;

    @Column()
    motherName : string;

    @Column({
        type : 'bigint',
        default : 0
    })
    motherContact : number;

    @Column()
    motherOccupation : string;

    @ManyToOne(() => Course, c => c.students)
    @JoinColumn()
    course : Course;

    @Column({nullable: true})
    @IsOptional()
    courseId?: number

    // @Column()
    // batch : string;

    @Column({
        default : ''
    })
    userName : string;

    @Column({
        default : ''
    })
    password : string;

    @Column({
        default : false
    })
    active : boolean;

    @ManyToMany(()=>ScholarShip, s=>s.students)
    @JoinTable()
    scholarships : ScholarShip[]


    @ManyToOne(()=>BatchesEntity, b=>b.student)
    @JoinColumn()
    batch?: BatchesEntity;

  
    @Column({nullable: true})
    @IsOptional()
    batchId?: number

}