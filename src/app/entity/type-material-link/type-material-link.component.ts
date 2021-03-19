import { Component, OnInit } from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {HttpParams} from '@angular/common/http';
import {TypeMaterialLinkService} from './type-material-link.service';
import {EditTypeMaterialLinkComponent} from './edit-type-material-link/edit-type-material-link.component';
import {FilterTypeMaterialLinkComponent} from './filter-type-material-link/filter-type-material-link.component';
import {DeleteTypeMaterialLinkComponent} from './delete-type-material-link/delete-type-material-link.component';
import {TypeMaterialLink} from '../../shared/models/type-material-link.model';

@Component({
  selector: 'app-type-material-link',
  templateUrl: './type-material-link.component.html',
  styleUrls: ['./type-material-link.component.css']
})
export class TypeMaterialLinkComponent implements OnInit {
  typeMaterialLinks: TypeMaterialLink[];
  typeMaterialLinkService: TypeMaterialLinkService;
  totalItems: number;
  itemsPerPage = 20;
  page = 1;
  codeFilter: string;
  nameFilter: string;
  materialResourceId: string;
  materialResourceTypeId: string;

  constructor(resourceService1: TypeMaterialLinkService, public modalService: NgbModal) {
    this.typeMaterialLinkService = resourceService1;
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
    options = options.set('sort', 'materialResourceName');
    if (this.codeFilter) {
      options = options.set('code.contains', this.codeFilter);
    }
    if (this.materialResourceId) {
      options = options.set('materialResourceId.equals', this.materialResourceId);
    }
    if (this.materialResourceTypeId) {
      options = options.set('materialResourceTypeId.equals', this.materialResourceTypeId);
    }
    if (this.nameFilter) {
      options = options.set('name.contains', this.nameFilter);
    }
    this.typeMaterialLinkService.findAll(options).subscribe(res => {
      this.typeMaterialLinks = res.body.content;
      this.totalItems = res.body.totalElements;
    });
  }


  addNewResource(): void {
    const modalRef = this.modalService.open(EditTypeMaterialLinkComponent, {size: 'lg', backdrop: 'static'});
    modalRef.componentInstance.loadDirectories();
    modalRef.componentInstance.init();
    modalRef.result.then(result => {
      if (result && result.update) {
        this.loadPage();
      }
    });
  }

  delete(typeMaterialLink: TypeMaterialLink): void {
    const modalRef = this.modalService.open(DeleteTypeMaterialLinkComponent, {size: 'lg', backdrop: 'static'});
    modalRef.componentInstance.typeMaterialLink = typeMaterialLink;
    modalRef.result.then(result => {
      if (result && result.update) {
        this.loadPage();
      }
    });
  }

  edit(typeMaterialLink: TypeMaterialLink): void {
    const modalRef = this.modalService.open(EditTypeMaterialLinkComponent, {size: 'lg', backdrop: 'static'});
    modalRef.componentInstance.typeMaterialLink = typeMaterialLink;
    modalRef.componentInstance.loadDirectories();
    modalRef.componentInstance.init();
    modalRef.result.then(result => {
      if (result && result.update) {
        this.loadPage();
      }
    });
  }

  showFilter(): void {
    const modalRef = this.modalService.open(FilterTypeMaterialLinkComponent, {size: 'lg', backdrop: 'static'});
    modalRef.componentInstance.materialResourceId = this.materialResourceId;
    modalRef.componentInstance.materialResourceTypeId = this.materialResourceTypeId;
    modalRef.componentInstance.loadDirectories();
    modalRef.result.then(result => {
      if (result) {
        this.materialResourceId = result.materialResourceId;
        this.materialResourceTypeId = result.materialResourceTypeId;
        this.loadPage(1);
      }
    });
  }

  deleteFilters(): void {
    this.materialResourceId = null;
    this.materialResourceTypeId = null;
    this.loadPage(1);
  }
}
