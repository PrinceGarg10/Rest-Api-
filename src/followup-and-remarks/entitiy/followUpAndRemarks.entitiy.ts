import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class FollowupAndRemarks{
    @PrimaryGeneratedColumn()
    id : number;

    @Column()
    title : string;

    @Column()
    category : string;

    @Column()
    description : string;

    @Column()
    collaborators : string;

    @Column({
        type : 'date',
       nullable : true
    })
    dueDate : Date

    @Column({
        nullable : true
    })
    priority : string;

    @Column({
        nullable : true
    })
    assignTo : string;
}
