import { Controller } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('api/users')
export class UserController {

  constructor(private readonly _userService: UserService) { }

  // @todo - complete user api endpoints

}