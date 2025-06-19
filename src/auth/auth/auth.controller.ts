import { Body, Controller, Post, HttpCode, HttpStatus, UseGuards, Get, Request, UnauthorizedException, Res } from '@nestjs/common';
import { Response } from 'express';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Post('login')
  async signIn(
    @Body() signInDto: Record<string, any>,
    @Res({ passthrough: true }) res: Response
  ) {
    const result = await this.authService.signIn(
      signInDto.username, 
      signInDto.password
    );

    if (!result.access_token) {
      throw new UnauthorizedException();
    }

    res.cookie('auth_token', result.access_token, {
      httpOnly: true,
      secure: false,
      sameSite: 'strict',
      maxAge: 1000 * 60 * 60, // 1 hour
    });

    console.log('Login successful, token set in cookie');
  }
  
  @UseGuards(AuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    console.log('req', req);
    return req.user;
  }

    logout(@Res({ passthrough: true }) res: Response) {
    res.clearCookie('auth_token', {
      httpOnly: true,
      secure: true,
      sameSite: 'strict',
    });
    return { message: 'Logged out' };
  }
}