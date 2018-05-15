import { Component, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { AuthService } from '../auth.service';

@Component()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly _authService: AuthService) {
    super({
      usernameField: 'email',
      passReqToCallback: false,
    });
  }

  public async validate(payload: any, password, done: () => {}) {
    // return await this._authService.login(email, password);
  }
}
