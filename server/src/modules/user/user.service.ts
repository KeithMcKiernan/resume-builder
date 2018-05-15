import { Inject, Injectable } from '@nestjs/common';
import { USER_MODEL_TOKEN } from 'app.constants';
import { IUser } from './interfaces/user.interface';
import { Model } from 'mongoose';

@Injectable()
export class UserService {

  constructor(
    @Inject(USER_MODEL_TOKEN)
    private readonly _userModel: Model<IUser>,
  ) { }

}