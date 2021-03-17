import {Moment} from 'moment';

export class QualityIndicatorMaterialLink {
  constructor(
    public qualityIndicatorId?: string,
    public materialResourceId?: string,
    public qualityIndicatorCode?: string,
    public materialResourceCode?: string,
    public qualityIndicatorName?: string,
    public materialResourceName?: string,
    public id?: string,
    public insTime?: Moment,
    public updTime?: Moment,
  ) {
  }
}
