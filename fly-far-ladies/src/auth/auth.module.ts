import {forwardRef, Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport/dist';
import { UsersModule } from 'src/users/users.module';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { jwtConstants } from './constants';
import { JwtStrategy } from './Guard/jwt.strategy';
import { LocalStrategy } from './strategy/local.strategy';

@Module({
  imports:[UsersModule,PassportModule,JwtModule.registerAsync({
        useFactory: async () => ({    
        secret: jwtConstants.secret,
        signOptions: { expiresIn: '24h' } 
      }),
  inject:[ConfigService]
  })
  ],

  providers: [AuthService, LocalStrategy, JwtStrategy],
  controllers:[AuthController],

})
export class AuthModule {}
