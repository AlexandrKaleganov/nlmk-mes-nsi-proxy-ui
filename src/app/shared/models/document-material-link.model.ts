import {Moment} from 'moment';

export class DocumentMaterialLink {
  constructor(
    public materialResourceId?: string,
    public materialResourceName?: string,
    public regulatoryDocumentId?: string,
    public materialResourceCode?: string,
    public regulatoryDocumentName?: string,
    public id?: string,
    public insTime?: Moment,
    public updTime?: Moment,
  ) {
  }
}

