import { ExceptionFilter, Catch } from '@nestjs/common';
import { HttpException } from '@nestjs/common';

@Catch()
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception, response) {
    response.status(500).json({
      statusCode: 500,
      message: `It's a 500 message from the exception filter`,
    });
  }
}