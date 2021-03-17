import { Injectable } from '@angular/core';
import {GLOBAL_URL} from '../../shared/constant/url.constant';
import {HttpClient, HttpParams, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {PageModel} from '../../shared/models/page-model.model';
import {QualityIndicator} from '../../shared/models/quality-indicator.model';

@Injectable({
  providedIn: 'root'
})
export class QualityIndicatorService {
  private url: string = GLOBAL_URL + '/api/quality-indicator';

  constructor(private http: HttpClient) {
  }

  findAll(options: HttpParams): Observable<HttpResponse<PageModel<QualityIndicator>>> {
    return this.http.get<PageModel<QualityIndicator>>(this.url, {
      params: options,
      observe: 'response'
    });
  }

  save(options: QualityIndicator): Observable<HttpResponse<QualityIndicator>> {
    return this.http.post<QualityIndicator>(this.url, options,
      {
        observe: 'response'
      });
  }
  findAllList(): Observable<HttpResponse<QualityIndicator[]>> {
    return this.http.get<QualityIndicator[]>(this.url + '/list', {
      observe: 'response'
    });
  }
  delete(id: string): Observable<HttpResponse<{}>> {
    return this.http.delete(`${this.url}/${id}`,
      {
        observe: 'response'
      });
  }

  update(options: QualityIndicator): Observable<HttpResponse<QualityIndicator>> {
    return this.http.put<QualityIndicator>(`${this.url}/${options.id}`, options,
      {
        observe: 'response'
      });
  }
}
