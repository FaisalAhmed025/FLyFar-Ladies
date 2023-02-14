import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Users } from 'src/users/entities/user.entity';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly userservice:UsersService,
    private readonly authservice:AuthService
   ) {
    super();
  }
  
  // async validateUser(Email:string, Password:string):Promise<Users>{
  //   const user = await this.userservice.getuserbyEmail(Email);
  //   if(!user && user.ValidatePassword(Password)){
  //     throw new BadRequestException()
  //   }
  //   if(user&& user.Password ==Password){
  //     return user; 
  //   } 
  //   else {
  //     throw new UnauthorizedException()
  //   }
    
  // }

  async validate(Email: string, Password: string): Promise<any> {
    const user = await this.authservice.validateUser(Email, Password);
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }

  }

 
