import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mvt'
})
export class MvtPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return (value > 0)?'assets/img/up.gif':'assets/img/down.png';
  }

}
