import {Injectable} from '@angular/core';
import {GLOBAL_URL} from '../../shared/constant/url.constant';
import {HttpClient, HttpParams, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {PageModel} from '../../shared/models/page-model.model';
import {MarkResource} from '../../shared/models/mark-resource.class';

@Injectable({
  providedIn: 'root'
})
export class MarkResourceService {
  private url: string = GLOBAL_URL + '/api/material-resource-mark';

  constructor(private http: HttpClient) {
  }

  findAll(options: HttpParams): Observable<HttpResponse<PageModel<MarkResource>>> {
    return this.http.get<PageModel<MarkResource>>(this.url, {
      params: options,
      observe: 'response'
    });
  }
  findAllList(): Observable<HttpResponse<MarkResource[]>> {
    return this.http.get<MarkResource[]>(this.url + '/list', {
      observe: 'response'
    });
  }

  save(options: MarkResource): Observable<HttpResponse<MarkResource>> {
    return this.http.post<MarkResource>(this.url, options,
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

  update(options: MarkResource): Observable<HttpResponse<MarkResource>> {
    return this.http.put<MarkResource>(`${this.url}/${options.id}`, options,
      {
        observe: 'response'
      });
  }
}
