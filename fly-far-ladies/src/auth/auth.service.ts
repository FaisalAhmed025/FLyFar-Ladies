import { BadRequestException, forwardRef, Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from 'src/users/entities/user.entity';
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';
@Injectable()
export class AuthService {
    constructor(
     @InjectRepository(Users)
     private usersService: UsersService,
     private jwtService: JwtService) {}

  async validateUser(Email: string, Password: string) {
    const user = await this.usersService.findOneByEmail(Email);
    if(!user && user.ValidatePassword(Password)){
      throw new BadRequestException()
    }
    return null;
  }
  generateToken(user:any) {
    return{
      access_token: this.jwtService.sign({Email: user.Email})
    };
  }
}
