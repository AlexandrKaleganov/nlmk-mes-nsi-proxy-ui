import { Component, OnInit } from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {HttpParams} from '@angular/common/http';
import {MarkResourceService} from './mark-resource.service';
import {EditMarkResourceComponent} from './edit-mark-resource/edit-mark-resource.component';
import {FilterMarkResourceComponent} from './filter-mark-resource/filter-mark-resource.component';
import {DeleteMarkResourceComponent} from './delete-mark-resource/delete-mark-resource.component';
import {MarkResource} from '../../shared/models/mark-resource.class';

@Component({
  selector: 'app-mark-resource',
  templateUrl: './mark-resource.component.html',
  styleUrls: ['./mark-resource.component.css']
})
export class MarkResourceComponent implements OnInit {
  markResources: MarkResource[];
  markResourceService: MarkResourceService;
  totalItems: number;
  itemsPerPage = 20;
  page = 1;
  codeFilter: string;
  nameFilter: string;

  constructor(markResourceService: MarkResourceService, public modalService: NgbModal) {
    this.markResourceService = markResourceService;
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
    this.markResourceService.findAll(options).subscribe(res => {
      this.markResources = res.body.content;
      this.totalItems = res.body.totalElements;
    });
  }


  addNewMarkResource(): void {
    const modalRef = this.modalService.open(EditMarkResourceComponent, {size: 'lg', backdrop: 'static'});
    modalRef.componentInstance.init();
    modalRef.result.then(result => {
      if (result && result.update) {
        this.loadPage();
      }
    });
  }

  delete(markResource: MarkResource): void {
    const modalRef = this.modalService.open(DeleteMarkResourceComponent, {size: 'lg', backdrop: 'static'});
    modalRef.componentInstance.markResource = markResource;
    modalRef.result.then(result => {
      if (result && result.update) {
        this.loadPage();
      }
    });
  }

  edit(markResource: MarkResource): void {
    const modalRef = this.modalService.open(EditMarkResourceComponent, {size: 'lg', backdrop: 'static'});
    modalRef.componentInstance.markResource = markResource;
    modalRef.componentInstance.init();
    modalRef.result.then(result => {
      if (result && result.update) {
        this.loadPage();
      }
    });
  }

  showFilter(): void {
    const modalRef = this.modalService.open(FilterMarkResourceComponent, {size: 'lg', backdrop: 'static'});
    modalRef.componentInstance.codeFilter = this.codeFilter;
    modalRef.componentInstance.nameFilter = this.nameFilter;
    modalRef.result.then(result => {
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
