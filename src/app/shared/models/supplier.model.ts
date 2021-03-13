import {Moment} from 'moment';

export class Supplier {
  constructor(
    public name?: string,
    public code?: string,
    public id?: string,
    public insTime?: Moment,
    public updTime?: Moment,
  ) {
  }
}
