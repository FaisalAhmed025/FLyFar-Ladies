import { Users } from './../users/entities/user.entity';
import { BadRequestException, forwardRef, Inject, Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(Users) private userrepo: Repository<Users>,
    @Inject(forwardRef(() => UsersService))
    private readonly userService: UsersService, 
    private jwtService: JwtService,
  ) {}

  async validateuser(Email: string, Password: string): Promise<any> {
    const user = await this.userService.getUser({Email,Password});
    const validpassword = user.ValidatePassword()
    if (!user && !validpassword) {
      throw new BadRequestException();
    }

    if(user && validpassword){
      return user;
    }
    return null;
  }

  async login(user: any): Promise<any> {
    const payload = { 
      Email:user.Email,
      sub: user._id

      
    };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  async getUser(Email: object ): Promise<Users> {
    return this.userrepo.findOne(Email);
}

  decodeToken(token: string): any {
    return this.jwtService.decode(token);
  }
}
