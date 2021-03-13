import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventManagerService {
  private map = new Subject<Map<any, any>>();
  map$ = this.map.asObservable();


  send(map): void {
    this.map.next(map);
  }

  constructor() {
  }
}
