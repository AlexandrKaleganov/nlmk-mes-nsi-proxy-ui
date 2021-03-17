import {Moment} from 'moment';
import {QualityIndicatorTypeModel} from './enum/quality-indicator-type.model';

export class QualityIndicator {
  constructor(
    public name?: string,
    public shortName?: string,
    public code?: string,
    public id?: string,
    public insTime?: Moment,
    public updTime?: Moment,
    public qualityIndicatorType?: QualityIndicatorTypeModel
  ) {
  }
}
