import {Moment} from 'moment';

export class StructureCompany {
  constructor(
    public name?: string,
    public code?: string,
    public parentId?: string,
    public id?: string,
    public insTime?: Moment,
    public updTime?: Moment,
  ) {
  }
}
