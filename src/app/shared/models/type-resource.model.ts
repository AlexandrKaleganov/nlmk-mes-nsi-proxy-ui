import {Moment} from 'moment';

export class TypeResource {
  constructor(
    public name?: string,
    public sapId?: string,
    public code?: string,
    public id?: string,
    public insTime?: Moment,
    public updTime?: Moment,
  ) {
  }
}
