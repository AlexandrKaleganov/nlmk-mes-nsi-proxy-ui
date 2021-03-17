import { Injectable } from '@angular/core';
import {GLOBAL_URL} from '../../shared/constant/url.constant';
import {HttpClient, HttpParams, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {PageModel} from '../../shared/models/page-model.model';
import {QualityIndicatorMaterialLink} from '../../shared/models/quality-indicator-material-link.model';

@Injectable({
  providedIn: 'root'
})
export class QualityIndicatorMaterialLinkService {
  private url: string = GLOBAL_URL + '/api/material-resource-quality-connection';

  constructor(private http: HttpClient) {
  }

  findAll(options: HttpParams): Observable<HttpResponse<PageModel<QualityIndicatorMaterialLink>>> {
    return this.http.get<PageModel<QualityIndicatorMaterialLink>>(this.url, {
      params: options,
      observe: 'response'
    });
  }

  save(options: QualityIndicatorMaterialLink): Observable<HttpResponse<QualityIndicatorMaterialLink>> {
    return this.http.post<QualityIndicatorMaterialLink>(this.url, options,
      {
        observe: 'response'
      });
  }

  delete(id: string): Observable<HttpResponse<{}>> {
    return this.http.delete(`${this.url}/${id}`,
      {
        observe: 'response'
      });
  }

  update(options: QualityIndicatorMaterialLink): Observable<HttpResponse<QualityIndicatorMaterialLink>> {
    return this.http.put<QualityIndicatorMaterialLink>(`${this.url}/${options.id}`, options,
      {
        observe: 'response'
      });
  }
}
