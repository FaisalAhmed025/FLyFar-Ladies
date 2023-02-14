import { Controller, Get, Post, Body, Patch, Param, Delete, Req, Res, HttpStatus, HttpException, BadRequestException } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Request, Response } from 'express';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Users } from './entities/user.entity';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService, @InjectRepository(Users) private userRepo:Repository<Users>) {}
  @Post('Register')
  async RegisterUser(@Body() createUserDto: CreateUserDto, @Req() req:Request, @Res() res:Response):Promise<any> {
    const {Email} = createUserDto
    const EmailAlreadyExist = await this.userRepo.findOne({
      where:{Email}
    })
    if(EmailAlreadyExist){
      throw new HttpException('User already exists', HttpStatus.BAD_REQUEST);     
      }  
    const user=  await this.usersService.Register(createUserDto);
    return res.status(HttpStatus.CREATED).json({ message:"User register successfully", user})
      
  }

  @Get('AllUsers')
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
}
