import { Injectable } from '@angular/core';
import {GLOBAL_URL} from '../../shared/constant/url.constant';
import {HttpClient, HttpParams, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {PageModel} from '../../shared/models/page-model.model';
import {StructureCompanyMaterialLink} from '../../shared/models/structure-company-material-link.model';

@Injectable({
  providedIn: 'root'
})
export class StructureCompanyMaterialLinkService {
  private url: string = GLOBAL_URL + '/api/material-resource-structure-company-connection';

  constructor(private http: HttpClient) {
  }

  findAll(options: HttpParams): Observable<HttpResponse<PageModel<StructureCompanyMaterialLink>>> {
    return this.http.get<PageModel<StructureCompanyMaterialLink>>(this.url, {
      params: options,
      observe: 'response'
    });
  }

  save(options: StructureCompanyMaterialLink): Observable<HttpResponse<StructureCompanyMaterialLink>> {
    return this.http.post<StructureCompanyMaterialLink>(this.url, options,
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

  update(options: StructureCompanyMaterialLink): Observable<HttpResponse<StructureCompanyMaterialLink>> {
    return this.http.put<StructureCompanyMaterialLink>(`${this.url}/${options.id}`, options,
      {
        observe: 'response'
      });
  }
}
