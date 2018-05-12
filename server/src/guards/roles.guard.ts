import { Reflector } from '@nestjs/core';
import { Guard, CanActivate, ExecutionContext } from '@nestjs/common';
import { Observable } from 'rxjs/Observable';

export type canActivate = boolean | Promise<boolean> | Observable<boolean>;

@Guard()
export class RoleGuard implements CanActivate {

  constructor(private readonly _reflector: Reflector) { }

  public canActivate(req, context: ExecutionContext): canActivate {
    const { user } = req;
    const { parent, handler } = context;
    const roles = this._reflector.get<string[]>('roles', handler);
    if (!roles) return true;
    const hasRole = () => !!user.roles.find((role) => !!roles.find((item) => item === role));
    return user && user.roles && hasRole();
  }
}