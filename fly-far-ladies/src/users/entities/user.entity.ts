import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Users {
    @PrimaryGeneratedColumn()
    Id: number;
    @Column()
    NameTitle:string
    @Column()
    FirstName:string
    @Column()
    LastName:string
    @Column()
    DOB:string
    @Column()
    Gender:string
    @Column()
    Address:string
    @Column()
    PhoneNumber:string
    @Column()
    Email:string
    @Column()
    Password:string
    @Column()
    Designation:string
    @Column()
    createdAt:string
    @Column()
    UpdatedAt:string

}
