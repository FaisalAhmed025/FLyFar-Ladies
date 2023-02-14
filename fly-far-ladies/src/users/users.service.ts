import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AuthService } from 'src/auth/auth.service';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Users } from './entities/user.entity';

@Injectable()
export class UsersService {

  constructor(
  @InjectRepository(Users)
  private createuserRep:Repository<Users>){}


  async Register(createUserDto: CreateUserDto){
    const user = await this.createuserRep.create(createUserDto)
    return await this.createuserRep.save(user)
    
  }

  findAll() {
    return `This action returns all users`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

   getuserbyEmail(Email:string):Promise<Users> {
    return this.createuserRep.findOne({
      where:{Email}
    })
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }

//   async getUser(Email:string, Password:string): Promise<Users> {
//     return await this.createuserRep.findOne({
//       where:{
//         Email
//       }
//     });
// }
}
