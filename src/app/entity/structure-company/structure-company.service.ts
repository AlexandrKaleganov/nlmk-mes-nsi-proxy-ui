import {Injectable} from '@angular/core';
import {HttpClient, HttpParams, HttpResponse} from '@angular/common/http';
import {PageModel} from '../../shared/models/page-model.model';
import {Observable} from 'rxjs';
import {GLOBAL_URL} from '../../shared/constant/url.constant';
import {MarkResource} from '../../shared/models/mark-resource.class';
import {StructureCompany} from '../../shared/models/structure-company';

@Injectable({
  providedIn: 'root'
})
export class StructureCompanyService {
  private url: string = GLOBAL_URL + '/api/structure-company';

  constructor(private http: HttpClient) {
  }

  findAll(options: HttpParams): Observable<HttpResponse<PageModel<StructureCompany>>> {
    return this.http.get<PageModel<StructureCompany>>(this.url, {
      params: options,
      observe: 'response'
    });
  }
  findAllList(): Observable<HttpResponse<StructureCompany[]>> {
    return this.http.get<StructureCompany[]>(this.url + '/list', {
      observe: 'response'
    });
  }
  save(options: StructureCompany): Observable<HttpResponse<StructureCompany>> {
    return this.http.post<StructureCompany>(this.url, options,
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

  update(options: StructureCompany): Observable<HttpResponse<StructureCompany>> {
    return this.http.put<StructureCompany>(`${this.url}/${options.id}`, options,
      {
        observe: 'response'
      });
  }
}
