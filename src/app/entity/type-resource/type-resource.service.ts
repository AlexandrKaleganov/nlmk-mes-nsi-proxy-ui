import {Injectable} from '@angular/core';
import {GLOBAL_URL} from '../../shared/constant/url.constant';
import {HttpClient, HttpParams, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {PageModel} from '../../shared/models/page-model.model';
import {TypeResource} from '../../shared/models/type-resource.model';

@Injectable({
  providedIn: 'root'
})
export class TypeResourceService {
  private url: string = GLOBAL_URL + '/api/material-resource-type';

  constructor(private http: HttpClient) {
  }

  findAll(options: HttpParams): Observable<HttpResponse<PageModel<TypeResource>>> {
    return this.http.get<PageModel<TypeResource>>(this.url, {
      params: options,
      observe: 'response'
    });
  }
  findAllList(): Observable<HttpResponse<TypeResource[]>> {
    return this.http.get<TypeResource[]>(this.url + '/list', {
      observe: 'response'
    });
  }

  save(options: TypeResource): Observable<HttpResponse<TypeResource>> {
    return this.http.post<TypeResource>(this.url, options,
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

  update(options: TypeResource): Observable<HttpResponse<TypeResource>> {
    return this.http.put<TypeResource>(`${this.url}/${options.id}`, options,
      {
        observe: 'response'
      });
  }
}
