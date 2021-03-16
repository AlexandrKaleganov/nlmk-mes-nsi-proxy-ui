import { Component, OnInit } from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {HttpParams} from '@angular/common/http';
import {ResourceService} from './resource.service';
import {EditResourceComponent} from './edit-resource/edit-resource.component';
import {FilterResourceComponent} from './filter-resource/filter-resource.component';
import {DeleteResourceComponent} from './delete-resource/delete-resource.component';
import {Resource} from '../../shared/models/resource.model';

@Component({
  selector: 'app-resource',
  templateUrl: './resource.component.html',
  styleUrls: ['./resource.component.css']
})
export class ResourceComponent implements OnInit {
  resources: Resource[];
  resourceService: ResourceService;
  totalItems: number;
  itemsPerPage = 20;
  page = 1;
  codeFilter: string;
  nameFilter: string;
  materialResourceMarkId: string;
  materialResourceTypeId: string;

  constructor(resourceService1: ResourceService, public modalService: NgbModal) {
    this.resourceService = resourceService1;
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
    options = options.set('sort', 'name');
    if (this.codeFilter) {
      options = options.set('code.contains', this.codeFilter);
    }
    if (this.materialResourceMarkId) {
      options = options.set('materialResourceMarkId.equals', this.materialResourceMarkId);
    }
    if (this.materialResourceTypeId) {
      options = options.set('materialResourceTypeId.equals', this.materialResourceTypeId);
    }
    if (this.nameFilter) {
      options = options.set('name.contains', this.nameFilter);
    }
    this.resourceService.findAll(options).subscribe(res => {
      this.resources = res.body.content;
      this.totalItems = res.body.totalElements;
    });
  }


  addNewResource(): void {
    const modalRef = this.modalService.open(EditResourceComponent, {size: 'lg', backdrop: 'static'});
    modalRef.componentInstance.loadDirectories();
    modalRef.componentInstance.init();
    modalRef.result.then(result => {
      if (result && result.update) {
        this.loadPage();
      }
    });
  }

  delete(resource: Resource): void {
    const modalRef = this.modalService.open(DeleteResourceComponent, {size: 'lg', backdrop: 'static'});
    modalRef.componentInstance.resource = resource;
    modalRef.result.then(result => {
      if (result && result.update) {
        this.loadPage();
      }
    });
  }

  edit(resource: Resource): void {
    const modalRef = this.modalService.open(EditResourceComponent, {size: 'lg', backdrop: 'static'});
    modalRef.componentInstance.resource = resource;
    modalRef.componentInstance.loadDirectories();
    modalRef.componentInstance.init();
    modalRef.result.then(result => {
      if (result && result.update) {
        this.loadPage();
      }
    });
  }

  showFilter(): void {
    const modelRef = this.modalService.open(FilterResourceComponent, {size: 'lg', backdrop: 'static'});
    modelRef.componentInstance.codeFilter = this.codeFilter;
    modelRef.componentInstance.nameFilter = this.nameFilter;
    modelRef.componentInstance.materialResourceMarkId = this.materialResourceMarkId;
    modelRef.componentInstance.materialResourceTypeId = this.materialResourceTypeId;
    modelRef.componentInstance.loadDirectories();
    modelRef.result.then(result => {
      if (result) {
        this.codeFilter = result.codeFilter;
        this.nameFilter = result.nameFilter;
        this.materialResourceMarkId = result.materialResourceMarkId;
        this.materialResourceTypeId = result.materialResourceTypeId;
        console.log(result.materialResourceMarkId);
        console.log(result.materialResourceTypeId);
        this.loadPage(1);
      }
    });
  }

  deleteFilters(): void {
    this.codeFilter = null;
    this.nameFilter = null;
    this.materialResourceMarkId = null;
    this.materialResourceTypeId = null;
    this.loadPage(1);
  }
}
