import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'booleanName'
})
export class BooleanNamePipe implements PipeTransform {
  private authorities: any = {
    false: {name: 'Нет'},
    true: {name: 'Да'},
  };

  transform(value: string): string {
    return this.authorities[value].name;
  }
}
