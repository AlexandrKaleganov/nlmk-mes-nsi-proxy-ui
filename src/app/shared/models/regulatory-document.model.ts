import {Moment} from 'moment';

export class RegulatoryDocument {
  constructor(
    public name?: string,
    public shortName?: string,
    public code?: string,
    public isActive?: boolean,
    public id?: string,
    public insTime?: Moment,
    public updTime?: Moment,
    public startDate?: Moment,
    public endDate?: Moment,
  ) {
    this.isActive = this.isActive || true;
  }
}
