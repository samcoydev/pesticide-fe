import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'status'
})
export class StatusPipe implements PipeTransform {

  levels: string[] = ["Open", "In-Progress", "Closed"];

  transform(value: number, _levels): unknown {
    _levels = this.levels;
    return _levels[value];
  }

}
