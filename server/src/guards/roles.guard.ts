import { Reflector } from '@nestjs/core';
import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';

export type canActivate = boolean | Promise<boolean> | Observable<boolean>;

@Injectable()
export class RoleGuard implements CanActivate {

  constructor(private readonly _reflector: Reflector) { }

  public canActivate(context: ExecutionContext): canActivate {
    const roles = this._reflector.get<string[]>('roles', context.getHandler());
    if (!roles) return true;

    const { user } = context.switchToHttp().getRequest();
    const hasRole = () => user.roles.some((role: any) => roles.indexOf(role));
    return user && user.roles && hasRole();
  }
}