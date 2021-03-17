import { Injectable } from '@angular/core';
import {GLOBAL_URL} from '../../shared/constant/url.constant';
import {HttpClient, HttpParams, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {PageModel} from '../../shared/models/page-model.model';
import {ClassMaterialLink} from '../../shared/models/class-material-link.model';

@Injectable({
  providedIn: 'root'
})
export class ClassMaterialLinkService {
  private url: string = GLOBAL_URL + '/api/material-resource-class-connection';

  constructor(private http: HttpClient) {
  }

  findAll(options: HttpParams): Observable<HttpResponse<PageModel<ClassMaterialLink>>> {
    return this.http.get<PageModel<ClassMaterialLink>>(this.url, {
      params: options,
      observe: 'response'
    });
  }

  save(options: ClassMaterialLink): Observable<HttpResponse<ClassMaterialLink>> {
    return this.http.post<ClassMaterialLink>(this.url, options,
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

  update(options: ClassMaterialLink): Observable<HttpResponse<ClassMaterialLink>> {
    return this.http.put<ClassMaterialLink>(`${this.url}/${options.id}`, options,
      {
        observe: 'response'
      });
  }
}
