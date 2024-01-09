import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dayTime',
})
export class DayTimePipe implements PipeTransform {
  transform(value: number): string {
    const dateWithouthSecond = new Date(value * 1000);
    return dateWithouthSecond.toLocaleTimeString('UTC', {
      hour: '2-digit',
      minute: '2-digit',
    });
  }
}
