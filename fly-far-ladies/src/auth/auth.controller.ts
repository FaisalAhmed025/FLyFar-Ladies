import { Controller, Post, UseGuards, Request, Body, Res,Req } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './local-auth.guard';



@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService,) {}
    // @UseGuards(LocalAuthGuard)
    @Post('login')
    login(@Request() req){
        return this.authService.generateToken(req.user)

    }
    
}

