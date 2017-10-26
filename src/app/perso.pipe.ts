import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'perso'
})
export class PersoPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return `${value} --- je suis passé par mon pipe`;
  }

}
