import {Moment} from 'moment';

export class ClassResource {
  constructor(
    public name?: string,
    public sapId?: string,
    public shortName?: string,
    public code?: string,
    public id?: string,
    public insTime?: Moment,
    public updTime?: Moment,
  ) {
  }
}
