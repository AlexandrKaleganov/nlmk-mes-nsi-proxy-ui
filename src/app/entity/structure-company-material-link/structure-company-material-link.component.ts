import { Component, OnInit } from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {HttpParams} from '@angular/common/http';
import {StructureCompanyMaterialLinkService} from './structure-company-material-link.service';
import {EditStructureCompanyMaterialLinkComponent} from './edit-structure-company-material-link/edit-structure-company-material-link.component';
import {FilterStructureCompanyMaterialLinkComponent} from './filter-structure-company-material-link/filter-structure-company-material-link.component';
import {DeleteStructureCompanyMaterialLinkComponent} from './delete-structure-company-material-link/delete-structure-company-material-link.component';
import {StructureCompanyMaterialLink} from '../../shared/models/structure-company-material-link.model';

@Component({
  selector: 'app-structure-company-material-link',
  templateUrl: './structure-company-material-link.component.html',
  styleUrls: ['./structure-company-material-link.component.css']
})
export class StructureCompanyMaterialLinkComponent implements OnInit {
  structureCompanyMaterialLinks: StructureCompanyMaterialLink[];
  structureCompanyMaterialLinkService: StructureCompanyMaterialLinkService;
  totalItems: number;
  itemsPerPage = 20;
  page = 1;
  codeFilter: string;
  nameFilter: string;
  materialResourceId: string;
  materialResourceStructureId: string;

  constructor(resourceService1: StructureCompanyMaterialLinkService, public modalService: NgbModal) {
    this.structureCompanyMaterialLinkService = resourceService1;
  }

  ngOnInit(): void {
    this.loadPage();
  }

  loadPage(page?: number): void {
    const pageToLoad: number = page ? page : this.page;
    let options: HttpParams = new HttpParams();
    if (pageToLoad !== undefined) {
      options = options.set('page', (pageToLoad - 1).toString());
    }
    options = options.set('size', this.itemsPerPage.toString());
    options = options.set('sort', 'materialResource.name');
    if (this.codeFilter) {
      options = options.set('code.contains', this.codeFilter);
    }
    if (this.materialResourceId) {
      options = options.set('materialResourceId.equals', this.materialResourceId);
    }
    if (this.materialResourceStructureId) {
      options = options.set('materialResourceStructureId.equals', this.materialResourceStructureId);
    }
    if (this.nameFilter) {
      options = options.set('name.contains', this.nameFilter);
    }
    this.structureCompanyMaterialLinkService.findAll(options).subscribe(res => {
      this.structureCompanyMaterialLinks = res.body.content;
      this.totalItems = res.body.totalElements;
    });
  }


  addNewResource(): void {
    const modalRef = this.modalService.open(EditStructureCompanyMaterialLinkComponent, {size: 'lg', backdrop: 'static'});
    modalRef.componentInstance.loadDirectories();
    modalRef.componentInstance.init();
    modalRef.result.then(result => {
      if (result && result.update) {
        this.loadPage();
      }
    });
  }

  delete(structureCompanyMaterialLink: StructureCompanyMaterialLink): void {
    const modalRef = this.modalService.open(DeleteStructureCompanyMaterialLinkComponent, {size: 'lg', backdrop: 'static'});
    modalRef.componentInstance.structureCompanyMaterialLink = structureCompanyMaterialLink;
    modalRef.result.then(result => {
      if (result && result.update) {
        this.loadPage();
      }
    });
  }

  edit(structureCompanyMaterialLink: StructureCompanyMaterialLink): void {
    const modalRef = this.modalService.open(EditStructureCompanyMaterialLinkComponent, {size: 'lg', backdrop: 'static'});
    modalRef.componentInstance.structureCompanyMaterialLink = structureCompanyMaterialLink;
    modalRef.componentInstance.loadDirectories();
    modalRef.componentInstance.init();
    modalRef.result.then(result => {
      if (result && result.update) {
        this.loadPage();
      }
    });
  }

  showFilter(): void {
    const modalRef = this.modalService.open(FilterStructureCompanyMaterialLinkComponent, {size: 'lg', backdrop: 'static'});
    modalRef.componentInstance.materialResourceId = this.materialResourceId;
    modalRef.componentInstance.materialResourceStructureId = this.materialResourceStructureId;
    modalRef.componentInstance.loadDirectories();
    modalRef.result.then(result => {
      if (result) {
        this.materialResourceId = result.materialResourceId;
        this.materialResourceStructureId = result.materialResourceStructureId;
        this.loadPage(1);
      }
    });
  }

  deleteFilters(): void {
    this.materialResourceId = null;
    this.materialResourceStructureId = null;
    this.loadPage(1);
  }
}
