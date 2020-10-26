import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'priority'
})
export class PriorityPipe implements PipeTransform {

  levels: string[] = ["Emergency", "Very High", "High", "Medium", "Low", "None"]

  transform(value: number, _levels): unknown {
    _levels = this.levels;
    return _levels[value];
  }

}
