
import * as bcrypt from 'bcrypt';
import { BaseEntity, BeforeInsert, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";


@Entity()
export class Users extends BaseEntity {
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
    @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)" })
    createdAt:Date;
    @Column()
    @UpdateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)", onUpdate: "CURRENT_TIMESTAMP(6)" })
    UpdatedAt:Date

    @BeforeInsert()
    async hashPassword(){
         this.Password = await bcrypt.hash(this.Password, 10)
    }
    async ValidatePassword(Password:string):Promise<boolean>{
        return bcrypt.compare(Password, this.Password)
    }

}
