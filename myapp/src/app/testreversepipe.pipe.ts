import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'testreversepipe'
})
export class TestreversepipePipe implements PipeTransform {
  revvalue : any;
  transform(value: any, ...args: unknown[]): any {
    this.revvalue = value.split('').reverse().join('');
    return this.revvalue;
  }

}
