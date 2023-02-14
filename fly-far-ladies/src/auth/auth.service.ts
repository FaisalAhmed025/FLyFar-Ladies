import { BadRequestException, forwardRef, Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { Users } from 'src/users/entities/user.entity';
@Injectable()
export class AuthService {
    constructor(
      private readonly userservice:UsersService,
      private readonly jwtservice:JwtService,
      private jwtService: JwtService)
      {}
      async validateUser(Email:string, Password:string):Promise<Users>{
        const user = await this.userservice.getuserbyEmail(Email);
        if(!user && !user.ValidatePassword(Password)){
          throw new BadRequestException()
        }
        if(user&& user.Password ===Password){
          return user; 
        } 
        else {
          throw new UnauthorizedException()
        }
        
      }
  async login(Email: any) {
    const payload = {
      Email:Email
    };
    return {
      access_token: await this.jwtservice.sign(payload),
    };
}
decodedToken(access_token:string):any{
    return this.jwtService.decode(access_token)
  }
}

