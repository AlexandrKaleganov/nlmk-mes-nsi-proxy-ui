import { Component, OnInit } from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {HttpParams} from '@angular/common/http';
import {ClassMaterialLinkService} from './class-material-link.service';
import {EditClassMaterialLinkComponent} from './edit-class-material-link/edit-class-material-link.component';
import {FilterClassMaterialLinkComponent} from './filter-class-material-link/filter-class-material-link.component';
import {DeleteClassMaterialLinkComponent} from './delete-class-material-link/delete-class-material-link.component';
import {ClassMaterialLink} from '../../shared/models/class-material-link.model';

@Component({
  selector: 'app-class-material-link',
  templateUrl: './class-material-link.component.html',
  styleUrls: ['./class-material-link.component.css']
})
export class ClassMaterialLinkComponent implements OnInit {
  classMaterialLinks: ClassMaterialLink[];
  classMaterialLinkService: ClassMaterialLinkService;
  totalItems: number;
  itemsPerPage = 20;
  page = 1;
  codeFilter: string;
  nameFilter: string;
  materialResourceId: string;
  materialResourceClassId: string;

  constructor(resourceService1: ClassMaterialLinkService, public modalService: NgbModal) {
    this.classMaterialLinkService = resourceService1;
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
    options = options.set('sort', 'materialResourceCode');
    if (this.codeFilter) {
      options = options.set('code.contains', this.codeFilter);
    }
    if (this.materialResourceId) {
      options = options.set('materialResourceId.equals', this.materialResourceId);
    }
    if (this.materialResourceClassId) {
      options = options.set('materialResourceClassId.equals', this.materialResourceClassId);
    }
    if (this.nameFilter) {
      options = options.set('name.contains', this.nameFilter);
    }
    this.classMaterialLinkService.findAll(options).subscribe(res => {
      this.classMaterialLinks = res.body.content;
      this.totalItems = res.body.totalElements;
    });
  }


  addNewResource(): void {
    const modalRef = this.modalService.open(EditClassMaterialLinkComponent, {size: 'lg', backdrop: 'static'});
    modalRef.componentInstance.loadDirectories();
    modalRef.componentInstance.init();
    modalRef.result.then(result => {
      if (result && result.update) {
        this.loadPage();
      }
    });
  }

  delete(classMaterialLink: ClassMaterialLink): void {
    const modalRef = this.modalService.open(DeleteClassMaterialLinkComponent, {size: 'lg', backdrop: 'static'});
    modalRef.componentInstance.classMaterialLink = classMaterialLink;
    modalRef.result.then(result => {
      if (result && result.update) {
        this.loadPage();
      }
    });
  }

  edit(classMaterialLink: ClassMaterialLink): void {
    const modalRef = this.modalService.open(EditClassMaterialLinkComponent, {size: 'lg', backdrop: 'static'});
    modalRef.componentInstance.classMaterialLink = classMaterialLink;
    modalRef.componentInstance.loadDirectories();
    modalRef.componentInstance.init();
    modalRef.result.then(result => {
      if (result && result.update) {
        this.loadPage();
      }
    });
  }

  showFilter(): void {
    const modelRef = this.modalService.open(FilterClassMaterialLinkComponent, {size: 'lg', backdrop: 'static'});
    modelRef.componentInstance.materialResourceId = this.materialResourceId;
    modelRef.componentInstance.materialResourceClassId = this.materialResourceClassId;
    modelRef.componentInstance.loadDirectories();
    modelRef.result.then(result => {
      if (result) {
        this.materialResourceId = result.materialResourceId;
        this.materialResourceClassId = result.materialResourceClassId;
        this.loadPage(1);
      }
    });
  }

  deleteFilters(): void {
    this.materialResourceId = null;
    this.materialResourceClassId = null;
    this.loadPage(1);
  }
}
