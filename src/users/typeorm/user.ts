import { IsOptional } from "class-validator";
import { Center } from "src/center/entitiy/center.entity";
import { Course } from "src/course/entitiy";
import { Column, Entity, JoinColumn, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn, Unique } from "typeorm";


@Entity()
export class User {
    @PrimaryGeneratedColumn({
        type: 'bigint'
    })
    id: number;
    @Column({
        nullable: false,
        default: "",
        // unique: true
    })
    name: string;

    @Column({
        nullable : false,
        default : 0,
        type: 'bigint',
        unique  : true

    })
    contact : number;

    @Column({
        nullable: false,
        default: ''
    })
    email: string;

    @Column({
        nullable: false,
        default: ''
    })
    role: string;

    // @Column({
    //     nullable: true,
    //     default: ''
    // })
    // course: string;

    @ManyToMany(()=>Course, c=> c.users)
    courses?:Course[]

    // @Column({
    //     nullable: true,
    //     default: ''
    // })
    // center: string;

    @ManyToOne(()=>Center, c=> c.user)
    @JoinColumn()
    center ?: Center

    @Column({nullable: true})
    @IsOptional()
    centerId?: number

    // @Column({
    // nullable : false,
    // default : ''
    // })
    // password : string;
}