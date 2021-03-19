import {Injectable} from '@angular/core';
import {HttpClient, HttpParams, HttpResponse} from '@angular/common/http';
import {PageModel} from '../../shared/models/page-model.model';
import {Supplier} from '../../shared/models/supplier.model';
import {Observable} from 'rxjs';
import {GLOBAL_URL} from '../../shared/constant/url.constant';

@Injectable({
  providedIn: 'root'
})
export class SupplierService {
  private url: string = GLOBAL_URL + '/api/supplier';

  constructor(private http: HttpClient) {
  }

  findAll(options: HttpParams): Observable<HttpResponse<PageModel<Supplier>>> {
    return this.http.get<PageModel<Supplier>>(this.url, {
      params: options,
      observe: 'response'
    });
  }
  findAllList(): Observable<HttpResponse<Supplier[]>> {
    return this.http.get<Supplier[]>(this.url + '/list', {
      observe: 'response'
    });
  }
  save(options: Supplier): Observable<HttpResponse<Supplier>> {
    return this.http.post<Supplier>(this.url, options,
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

  update(options: Supplier): Observable<HttpResponse<Supplier>> {
    return this.http.put<Supplier>(`${this.url}/${options.id}`, options,
      {
        observe: 'response'
      });
  }
}
