import { IsOptional } from "class-validator";
import { BatchesEntity } from "src/batches/entitiy/batches.entitiy";
import { Center } from "src/center/entitiy/center.entity";
import { Enquiry } from "src/enquiry/entity/enquiry.entitiy";
import { Student } from "src/students/entitiy/student.entity";
import { User } from "src/users/typeorm";
import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Course {
    @PrimaryGeneratedColumn({
        type: 'bigint'
    })
    id: number;
    @Column({
        nullable: false,
        default: "",
    })
    courseName: string;

    // @Column({
    //     nullable : false,
    //     default : 0,

    // })
    // center : string;
    @ManyToOne(() => Center, c => c.courses)
    @JoinColumn()
    center : Center

    @Column({nullable: true})
    @IsOptional()
    centerId? : number

    @Column({
        nullable: false,
        default: 0
    })
    session: number;

    @Column({
        nullable: false,
        default: 0
    })
    fees: number;

    @Column({
        nullable: true,
        default: ''
    })
    status: string;

    @Column({default: true})
    isActive: boolean

    // @Column({
    //     nullable: true,
    //     default: ''
    // })
    // batch: string;

    @OneToMany(() => BatchesEntity, b=> b.course)
    // @JoinColumn()
    batches?:BatchesEntity[]

    // @Column({nullable: true})
    // @IsOptional() 
    // batchId? : number

    @OneToMany(() => Student, s => s.course)
    students?: Student[]

    @ManyToMany(()=>User, u=>u.courses)
    @JoinTable()
    users:User[]

    @OneToOne(()=>Enquiry, e=>e.course)
    enquiry?: Enquiry


}