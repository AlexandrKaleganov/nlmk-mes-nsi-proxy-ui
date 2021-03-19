import {Moment} from 'moment';

export class StructureCompanyMaterialLink {
  constructor(
    public materialResourceId?: string,
    public structureCompanyId?: string,
    public structureCompanyCode?: string,
    public structureCompanyName?: string,
    public materialResourceName?: string,
    public materialResourceCode?: string,
    public id?: string,
    public insTime?: Moment,
    public updTime?: Moment,
  ) {
  }
}
