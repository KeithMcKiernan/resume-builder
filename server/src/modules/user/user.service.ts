import { Component } from '@nestjs/common';

@Component()
export class UserService {

  constructor(private readonly _cryptoService: any) { }

  public async createUser(user: any) {

  }
}