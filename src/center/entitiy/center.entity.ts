import { Course } from "src/course/entitiy";
import { Enquiry } from "src/enquiry/entity/enquiry.entitiy";
import { User } from "src/users/typeorm";
import { Column, Entity, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Center{
    @PrimaryGeneratedColumn()
    id : number

    @Column()
    centerName : string;

    @Column()
    centerCode : number;

    @Column()
    address : string;

    @OneToMany(() => Course, c => c.center)
    courses?: Course[]

    @OneToMany(()=>User, c=>c.center)
    user : User[]

    @OneToOne(()=>Enquiry, e=>e.center)
    enquiry ?:Enquiry
}