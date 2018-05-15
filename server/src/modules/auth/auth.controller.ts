import { Controller, Get, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('auth')
export class AuthController {

  constructor(private readonly _authService: AuthService) { }

  @Get('token')
  public async generateToken() {
    return await this._authService.generateToken();
  }

  @Get('data')
  @UseGuards(AuthGuard('jwt'))
  public findAll() {

  }
}
