import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";


@Entity()
export class Users {
    @PrimaryGeneratedColumn()
    Id: number;
    @Column()
    CustomerId:string
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
    @UpdateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)" })
    createdAt:Date;
    @Column()
    @UpdateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)", onUpdate: "CURRENT_TIMESTAMP(6)" })
    UpdatedAt:Date

}
