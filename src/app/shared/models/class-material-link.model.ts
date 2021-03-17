import {Moment} from 'moment';

export class ClassMaterialLink {
  constructor(
    public materialResourceClassId?: string,
    public materialResourceId?: string,
    public materialResourceClassCode?: string,
    public materialResourceCode?: string,
    public id?: string,
    public insTime?: Moment,
    public updTime?: Moment,
  ) {
  }
}
