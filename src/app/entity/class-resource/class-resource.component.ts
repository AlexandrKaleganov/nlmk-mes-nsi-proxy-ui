import { Component, OnInit } from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {HttpParams} from '@angular/common/http';
import {ClassResourceService} from './class-resource.service';
import {EditClassResourceComponent} from './edit-class-resource/edit-class-resource.component';
import {FilterClassResourceComponent} from './filter-class-resource/filter-class-resource.component';
import {DeleteClassResourceComponent} from './delete-class-resource/delete-class-resource.component';
import {TypeResource} from '../../shared/models/type-resource.model';
import {ClassResource} from '../../shared/models/class-resource.model';

@Component({
  selector: 'app-class-resource',
  templateUrl: './class-resource.component.html',
  styleUrls: ['./class-resource.component.css']
})
export class ClassResourceComponent implements OnInit {
  classResources: ClassResource[];
  classResourceService: ClassResourceService;
  totalItems: number;
  itemsPerPage = 20;
  page = 1;
  codeFilter: string;
  nameFilter: string;

  constructor(classResourceService1: ClassResourceService, public modalService: NgbModal) {
    this.classResourceService = classResourceService1;
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
    this.classResourceService.findAll(options).subscribe(res => {
      this.classResources = res.body.content;
      this.totalItems = res.body.totalElements;
    });
  }


  addNew(): void {
    const modalRef = this.modalService.open(EditClassResourceComponent, {size: 'lg', backdrop: 'static'});
    modalRef.componentInstance.init();
    modalRef.result.then(result => {
      if (result && result.update) {
        this.loadPage();
      }
    });
  }

  delete(classResource: ClassResource): void {
    const modalRef = this.modalService.open(DeleteClassResourceComponent, {size: 'lg', backdrop: 'static'});
    modalRef.componentInstance.classResource = classResource;
    modalRef.result.then(result => {
      if (result && result.update) {
        this.loadPage();
      }
    });
  }

  edit(classResource: ClassResource): void {
    const modalRef = this.modalService.open(EditClassResourceComponent, {size: 'lg', backdrop: 'static'});
    modalRef.componentInstance.classResource = classResource;
    modalRef.componentInstance.init();
    modalRef.result.then(result => {
      if (result && result.update) {
        this.loadPage();
      }
    });
  }

  showFilter(): void {
    const modelRef = this.modalService.open(FilterClassResourceComponent, {size: 'lg', backdrop: 'static'});
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
