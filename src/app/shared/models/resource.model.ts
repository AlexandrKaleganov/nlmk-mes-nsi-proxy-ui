import {Moment} from 'moment';

export class Resource {
  constructor(
    public name?: string,
    public shortName?: string,
    public code?: string,
    public supplierId?: string,
    public materialResourceMarkId?: string,
    public supplierCode?: string,
    public materialResourceMarkCode?: string,
    public supplierName?: string,
    public materialResourceMarkName?: string,
    public id?: string,
    public insTime?: Moment,
    public updTime?: Moment,
  ) {
  }
}
