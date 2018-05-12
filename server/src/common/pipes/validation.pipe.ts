import { Pipe, PipeTransform, ArgumentMetadata } from '@nestjs/common';

@Pipe()
export class ValidationPipe implements PipeTransform<any> {
  public async transform(value, metadata: ArgumentMetadata) {
    const { metatype } = metadata;
    // @todo finish validation pipe
  }
}