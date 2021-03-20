import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'boolean'
})
export class BooleanPipe implements PipeTransform {
  private authorities: any = {
    false: {name: 'badge badge-danger'},
    true: {name: 'badge badge-success'},
  };

  transform(value: string): string {
    return this.authorities[value].name;
  }
}
