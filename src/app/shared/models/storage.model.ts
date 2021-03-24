import {Moment} from 'moment';
import {StorageSelection} from './storage-selection.model';

export class Storage {
  constructor(
    public name?: string,
    public code?: string,
    public sections?: StorageSelection[],
    public id?: string,
    public insTime?: Moment,
    public updTime?: Moment,
  ) {
    this.sections = this.sections || [];
  }
}
