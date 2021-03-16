import { Component, OnInit } from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {HttpParams} from '@angular/common/http';
import {TypeResourceService} from './type-resource.service';
import {EditTypeResourceComponent} from './edit-type-resource/edit-type-resource.component';
import {FilterTypeResourceComponent} from './filter-type-resource/filter-type-resource.component';
import {DeleteTypeResourceComponent} from './delete-type-resource/delete-type-resource.component';
import {TypeResource} from '../../shared/models/type-resource.model';

@Component({
  selector: 'app-type-resource',
  templateUrl: './type-resource.component.html',
  styleUrls: ['./type-resource.component.css']
})
export class TypeResourceComponent implements OnInit {
  typeResources: TypeResource[];
  typeResourceService: TypeResourceService;
  totalItems: number;
  itemsPerPage = 20;
  page = 1;
  codeFilter: string;
  nameFilter: string;

  constructor(typeResourceService1: TypeResourceService, public modalService: NgbModal) {
    this.typeResourceService = typeResourceService1;
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
    if (this.nameFilter) {
      options = options.set('name.contains', this.nameFilter);
    }
    this.typeResourceService.findAll(options).subscribe(res => {
      this.typeResources = res.body.content;
      this.totalItems = res.body.totalElements;
    });
  }


  addNew(): void {
    const modalRef = this.modalService.open(EditTypeResourceComponent, {size: 'lg', backdrop: 'static'});
    modalRef.componentInstance.init();
    modalRef.result.then(result => {
      if (result && result.update) {
        this.loadPage();
      }
    });
  }

  delete(typeResource: TypeResource): void {
    const modalRef = this.modalService.open(DeleteTypeResourceComponent, {size: 'lg', backdrop: 'static'});
    modalRef.componentInstance.typeResource = typeResource;
    modalRef.result.then(result => {
      if (result && result.update) {
        this.loadPage();
      }
    });
  }

  edit(typeResource: TypeResource): void {
    const modalRef = this.modalService.open(EditTypeResourceComponent, {size: 'lg', backdrop: 'static'});
    modalRef.componentInstance.typeResource = typeResource;
    modalRef.componentInstance.init();
    modalRef.result.then(result => {
      if (result && result.update) {
        this.loadPage();
      }
    });
  }

  showFilter(): void {
    const modelRef = this.modalService.open(FilterTypeResourceComponent, {size: 'lg', backdrop: 'static'});
    modelRef.componentInstance.codeFilter = this.codeFilter;
    modelRef.componentInstance.nameFilter = this.nameFilter;
    modelRef.result.then(result => {
      console.log(result);
      if (result) {
        this.codeFilter = result.codeFilter;
        this.nameFilter = result.nameFilter;
        this.loadPage(1);
      }
    });
  }

  deleteFilters(): void {
    this.codeFilter = null;
    this.nameFilter = null;
    this.loadPage(1);
  }
}
