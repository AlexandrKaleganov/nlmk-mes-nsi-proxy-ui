import {Moment} from 'moment';

export class StorageSelection {
  constructor(
    public name?: string,
    public code?: string,
    public id?: string,
    public insTime?: Moment,
    public updTime?: Moment,

  ) {
  }
}
