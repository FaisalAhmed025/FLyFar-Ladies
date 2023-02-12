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
  private createuserRep: Repository<Users>,
  // @Inject(forwardRef(() => AuthService)) //<--- 
  // private readonly authService: AuthService,
  ){}

  async Register(createUserDto: CreateUserDto):Promise<Users> {
    const user =  await this.createuserRep.create(createUserDto)
    return this.createuserRep.save(user)
  }

  findAll() {
    return `This action returns all users`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }

  async getUser(Email: object ): Promise<any> {
    return await this.createuserRep.findOne(Email);
}
}
