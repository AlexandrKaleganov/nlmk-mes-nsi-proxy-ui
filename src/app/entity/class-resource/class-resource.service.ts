import {Injectable} from '@angular/core';
import {GLOBAL_URL} from '../../shared/constant/url.constant';
import {HttpClient, HttpParams, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {PageModel} from '../../shared/models/page-model.model';
import {ClassResource} from '../../shared/models/Class-resource.model';

@Injectable({
  providedIn: 'root'
})
export class ClassResourceService {
  private url: string = GLOBAL_URL + '/api/material-resource-class';

  constructor(private http: HttpClient) {
  }

  findAll(options: HttpParams): Observable<HttpResponse<PageModel<ClassResource>>> {
    return this.http.get<PageModel<ClassResource>>(this.url, {
      params: options,
      observe: 'response'
    });
  }
  findAllList(): Observable<HttpResponse<ClassResource[]>> {
    return this.http.get<ClassResource[]>(this.url + '/list', {
      observe: 'response'
    });
  }

  save(options: ClassResource): Observable<HttpResponse<ClassResource>> {
    return this.http.post<ClassResource>(this.url, options,
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

  update(options: ClassResource): Observable<HttpResponse<ClassResource>> {
    return this.http.put<ClassResource>(`${this.url}/${options.id}`, options,
      {
        observe: 'response'
      });
  }
}
