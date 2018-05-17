import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'limitTo' })
export class LimitToPipe implements PipeTransform {
  public transform(value: string, args: number): string {
    if (value == null) return '';
    return value.substring(0, args);
  }
}
