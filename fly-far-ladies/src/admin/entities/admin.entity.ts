import { Column, Entity} from "typeorm"

@Entity()
export class Admin {
    @Column()
    username:string
    @Column()
    Email:string
    @Column()
    Password:string
    
}
function IsEmail() {
    throw new Error("Function not implemented.")
}

