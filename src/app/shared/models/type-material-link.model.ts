import {Moment} from 'moment';

export class TypeMaterialLink {
  constructor(
    public materialResourceTypeId?: string,
    public materialResourceId?: string,
    public materialResourceTypeCode?: string,
    public materialResourceCode?: string,
    public id?: string,
    public insTime?: Moment,
    public updTime?: Moment,
  ) {
  }
}
