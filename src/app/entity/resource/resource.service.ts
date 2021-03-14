import { Injectable } from '@angular/core';
import {GLOBAL_URL} from '../../shared/constant/url.constant';
import {HttpClient, HttpParams, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {PageModel} from '../../shared/models/page-model.model';
import {Resource} from '../../shared/models/resource.model';

@Injectable({
  providedIn: 'root'
})
export class ResourceService {
  private url: string = GLOBAL_URL + '/api/material-resource';

  constructor(private http: HttpClient) {
  }

  findAll(options: HttpParams): Observable<HttpResponse<PageModel<Resource>>> {
    return this.http.get<PageModel<Resource>>(this.url, {
      params: options,
      observe: 'response'
    });
  }

  save(options: Resource): Observable<HttpResponse<Resource>> {
    return this.http.post<Resource>(this.url, options,
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

  update(options: Resource): Observable<HttpResponse<Resource>> {
    return this.http.put<Resource>(`${this.url}/${options.id}`, options,
      {
        observe: 'response'
      });
  }
}
