import { Component, OnInit } from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {HttpParams} from '@angular/common/http';
import {ReferenceValueService} from './reference-value.service';
import {EditReferenceValueComponent} from './edit-reference-value/edit-reference-value.component';
import {FilterReferenceValueComponent} from './filter-reference-value/filter-reference-value.component';
import {DeleteReferenceValueComponent} from './delete-reference-value/delete-reference-value.component';
import {Resource} from '../../shared/models/resource.model';
import {ReferenceValue} from '../../shared/models/reference-value.model';

@Component({
  selector: 'app-reference-value',
  templateUrl: './reference-value.component.html',
  styleUrls: ['./reference-value.component.css']
})
export class ReferenceValueComponent implements OnInit {
  referenceValues: ReferenceValue[];
  referenceValueService: ReferenceValueService;
  totalItems: number;
  itemsPerPage = 20;
  page = 1;
  qualityIndicatorId: string;
  regulatoryDocumentId: string;

  constructor(resourceService1: ReferenceValueService, public modalService: NgbModal) {
    this.referenceValueService = resourceService1;
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
    options = options.set('sort', 'qualityIndicator.name');
    if (this.qualityIndicatorId) {
      options = options.set('qualityIndicatorId.equals', this.qualityIndicatorId);
    }
    if (this.regulatoryDocumentId) {
      options = options.set('regulatoryDocumentId.equals', this.regulatoryDocumentId);
    }
    this.referenceValueService.findAll(options).subscribe(res => {
      this.referenceValues = res.body.content;
      this.totalItems = res.body.totalElements;
    });
  }


  addNew(): void {
    const modalRef = this.modalService.open(EditReferenceValueComponent, {size: 'lg', backdrop: 'static'});
    modalRef.componentInstance.loadDirectories();
    modalRef.componentInstance.init();
    modalRef.result.then(result => {
      if (result && result.update) {
        this.loadPage();
      }
    });
  }

  delete(referenceValue: ReferenceValue): void {
    const modalRef = this.modalService.open(DeleteReferenceValueComponent, {size: 'lg', backdrop: 'static'});
    modalRef.componentInstance.referenceValue = referenceValue;
    modalRef.result.then(result => {
      if (result && result.update) {
        this.loadPage();
      }
    });
  }

  edit(referenceValue: ReferenceValue): void {
    const modalRef = this.modalService.open(EditReferenceValueComponent, {size: 'lg', backdrop: 'static'});
    modalRef.componentInstance.referenceValue = referenceValue;
    modalRef.componentInstance.loadDirectories();
    modalRef.componentInstance.init();
    modalRef.result.then(result => {
      if (result && result.update) {
        this.loadPage();
      }
    });
  }

  showFilter(): void {
    const modalRef = this.modalService.open(FilterReferenceValueComponent, {size: 'lg', backdrop: 'static'});
    modalRef.componentInstance.qualityIndicatorId = this.qualityIndicatorId;
    modalRef.componentInstance.regulatoryDocumentId = this.regulatoryDocumentId;
    modalRef.componentInstance.loadDirectories();
    modalRef.result.then(result => {
      if (result) {
        this.qualityIndicatorId = result.qualityIndicatorId;
        this.regulatoryDocumentId = result.regulatoryDocumentId;
        this.loadPage(1);
      }
    });
  }

  deleteFilters(): void {
    this.qualityIndicatorId = null;
    this.regulatoryDocumentId = null;
    this.loadPage(1);
  }
}
