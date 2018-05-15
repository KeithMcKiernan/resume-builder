import * as jwt from 'jsonwebtoken';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {

  public async generateToken() {
    const expiresIn = 60 * 60;
    const secretKey = 'secretkey';
    const user = { email: 'thisis@example.com' };
    const token = jwt.sign(user, secretKey, { expiresIn });
    return await { expires_in: expiresIn, access_token: token };
  }

  public async validateUser() {
    return true;
  }
}