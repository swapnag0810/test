import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'testuppercasepipe'
})
export class TestuppercasepipePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
