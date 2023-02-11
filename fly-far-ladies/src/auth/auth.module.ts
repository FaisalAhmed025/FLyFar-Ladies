import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UsersModule } from 'src/users/users.module';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports:[ UsersModule, PassportModule,JwtModule.register({
    secret: jwtConstants.secret,
    signOptions: { expiresIn: '24h' },
  })
   ],
  providers: [AuthService, LocalStrategy, JwtStrategy],
  controllers: [AuthController],
  exports:[AuthService]
})
export class AuthModule {}
