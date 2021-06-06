import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'break'
})
export class BreakPipe implements PipeTransform {

  transform(value: any[], pageNum: number): any[] {
    return value.slice(pageNum*12, pageNum*12+12);
  }

}
