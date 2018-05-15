import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {

  constructor(private readonly _cryptoService: any) { }

  public async createUser(user: any) {

  }
}