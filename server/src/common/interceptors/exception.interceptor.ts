import { Injectable, NestInterceptor, ExecutionContext } from '@nestjs/common';
import { HttpException, HttpStatus } from '@nestjs/common';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class ExceptionInterceptor implements NestInterceptor {
  public intercept(context: ExecutionContext, source$: Observable<any>): Observable<any> {
    return source$.pipe(
      catchError(error =>
        throwError(
          new HttpException('Exception interceptor called', HttpStatus.BAD_GATEWAY),
        ),
      ),
    );
  }
}