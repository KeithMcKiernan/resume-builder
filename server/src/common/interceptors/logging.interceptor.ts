import { Injectable, NestInterceptor, ExecutionContext } from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  public intercept(context: ExecutionContext, source$: Observable<any>): Observable<any> {
    console.log('Before...');
    const now = Date.now();
    return source$.pipe(
      tap(() => {
        console.log(`After...${ Date.now() - now } ms`);
      },
    ));
  }
}
