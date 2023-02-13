import { forwardRef, Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Users } from './entities/user.entity';
import { AuthService } from 'src/auth/auth.service';
import { AuthModule } from 'src/auth/auth.module';


@Module({
  imports:[forwardRef(()=>AuthModule), TypeOrmModule.forFeature([Users])],
  controllers: [UsersController],
  providers: [UsersService],
  exports:[UsersService]
})
export class UsersModule {}
