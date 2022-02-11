import { Student } from "src/students/entitiy/student.entity";
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class ScholarShip{
    @PrimaryGeneratedColumn()
    id : number;

    @Column()
    scholarShipName : string

    @Column()
    percentage : number;

    @Column()
    category : string

    @ManyToMany(()=>Student, s=>s.scholarships)
    students : Student[]

}