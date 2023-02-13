import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Users } from 'src/users/entities/user.entity';
import { CreateUserDto } from 'src/users/dto/create-user.dto';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super();
  }

  async validate(Email: string, Password: string){
    const user = await this.authService.validateUser(Email, Password);
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}