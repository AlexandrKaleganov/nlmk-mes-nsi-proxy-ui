import { Injectable } from '@angular/core';
import {GLOBAL_URL} from '../../shared/constant/url.constant';
import {HttpClient, HttpParams, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {PageModel} from '../../shared/models/page-model.model';
import {DocumentMaterialLink} from '../../shared/models/document-material-link.model';

@Injectable({
  providedIn: 'root'
})
export class DocumentMaterialLinkService {
  private url: string = GLOBAL_URL + '/api/material-resource-document-connection';

  constructor(private http: HttpClient) {
  }

  findAll(options: HttpParams): Observable<HttpResponse<PageModel<DocumentMaterialLink>>> {
    return this.http.get<PageModel<DocumentMaterialLink>>(this.url, {
      params: options,
      observe: 'response'
    });
  }

  save(options: DocumentMaterialLink): Observable<HttpResponse<DocumentMaterialLink>> {
    return this.http.post<DocumentMaterialLink>(this.url, options,
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

  update(options: DocumentMaterialLink): Observable<HttpResponse<DocumentMaterialLink>> {
    return this.http.put<DocumentMaterialLink>(`${this.url}/${options.id}`, options,
      {
        observe: 'response'
      });
  }
}
