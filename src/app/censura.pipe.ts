import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'censura'
})
export class CensuraPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return "Esto es un titulaso " + value;
  }

}
