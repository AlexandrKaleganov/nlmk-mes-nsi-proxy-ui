import { Injectable } from '@angular/core';
import {GLOBAL_URL} from '../../shared/constant/url.constant';
import {HttpClient, HttpParams, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {PageModel} from '../../shared/models/page-model.model';
import {TypeMaterialLink} from '../../shared/models/type-material-link.model';

@Injectable({
  providedIn: 'root'
})
export class TypeMaterialLinkService {
  private url: string = GLOBAL_URL + '/api/material-resource-type-connection';

  constructor(private http: HttpClient) {
  }

  findAll(options: HttpParams): Observable<HttpResponse<PageModel<TypeMaterialLink>>> {
    return this.http.get<PageModel<TypeMaterialLink>>(this.url, {
      params: options,
      observe: 'response'
    });
  }

  save(options: TypeMaterialLink): Observable<HttpResponse<TypeMaterialLink>> {
    return this.http.post<TypeMaterialLink>(this.url, options,
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

  update(options: TypeMaterialLink): Observable<HttpResponse<TypeMaterialLink>> {
    return this.http.put<TypeMaterialLink>(`${this.url}/${options.id}`, options,
      {
        observe: 'response'
      });
  }
}
