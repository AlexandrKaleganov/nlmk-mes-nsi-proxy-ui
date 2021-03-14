import {Moment} from 'moment';

export class MarkResource {
  constructor(
    public name?: string,
    public shortName?: string,
    public code?: string,
    public id?: string,
    public insTime?: Moment,
    public updTime?: Moment,
  ) {
  }
}
