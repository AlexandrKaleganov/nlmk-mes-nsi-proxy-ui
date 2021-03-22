import {Moment} from 'moment';

export class ReferenceValue {
  constructor(
    public regulatoryDocumentId?: string,
    public qualityIndicatorId?: string,
    public qualityIndicatorCode?: string,
    public qualityIndicatorName?: string,
    public regulatoryDocumentName?: string,
    public valueMin?: number,
    public valueMax?: number,
    public valueTolerance?: number,
    public id?: string,
    public insTime?: Moment,
    public updTime?: Moment,
  ) {
  }
}
