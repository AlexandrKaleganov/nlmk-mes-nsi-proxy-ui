import {Injectable} from '@angular/core';
import {GLOBAL_URL} from '../../shared/constant/url.constant';
import {HttpClient, HttpParams, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {PageModel} from '../../shared/models/page-model.model';
import {ReferenceValue} from '../../shared/models/reference-value.model';

@Injectable({
  providedIn: 'root'
})
export class ReferenceValueService {
  private url: string = GLOBAL_URL + '/api/reference-value';

  constructor(private http: HttpClient) {
  }

  findAll(options: HttpParams): Observable<HttpResponse<PageModel<ReferenceValue>>> {
    return this.http.get<PageModel<ReferenceValue>>(this.url, {
      params: options,
      observe: 'response'
    });
  }

  save(options: ReferenceValue): Observable<HttpResponse<ReferenceValue>> {
    return this.http.post<ReferenceValue>(this.url, options,
      {
        observe: 'response'
      });
  }

  findAllList(): Observable<HttpResponse<ReferenceValue[]>> {
    return this.http.get<ReferenceValue[]>(this.url + '/list', {
      observe: 'response'
    });
  }

  delete(id: string): Observable<HttpResponse<{}>> {
    return this.http.delete(`${this.url}/${id}`,
      {
        observe: 'response'
      });
  }

  update(options: ReferenceValue): Observable<HttpResponse<ReferenceValue>> {
    return this.http.put<ReferenceValue>(`${this.url}/${options.id}`, options,
      {
        observe: 'response'
      });
  }
}
