import { Component, OnInit } from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {HttpParams} from '@angular/common/http';
import {QualityIndicatorService} from './quality-indicator.service';
import {EditQualityIndicatorComponent} from './edit-quality-indicator/edit-quality-indicator.component';
import {FilterQualityIndicatorComponent} from './filter-quality-indicator/filter-quality-indicator.component';
import {DeleteQualityIndicatorComponent} from './delete-quality-indicator/delete-quality-indicator.component';
import {QualityIndicator} from '../../shared/models/quality-indicator.model';

@Component({
  selector: 'app-quality-indicator',
  templateUrl: './quality-indicator.component.html',
  styleUrls: ['./quality-indicator.component.css']
})
export class QualityIndicatorComponent implements OnInit {
  qualityIndicators: QualityIndicator[];
  qualityIndicatorService: QualityIndicatorService;
  totalItems: number;
  itemsPerPage = 20;
  page = 1;
  codeFilter: string;
  nameFilter: string;
  materialResourceId: string;

  constructor(QualityIndicatorService1: QualityIndicatorService, public modalService: NgbModal) {
    this.qualityIndicatorService = QualityIndicatorService1;
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
    if (this.materialResourceId) {
      options = options.set('materialResourceId.equals', this.materialResourceId);
    }
    if (this.nameFilter) {
      options = options.set('name.contains', this.nameFilter);
    }
    this.qualityIndicatorService.findAll(options).subscribe(res => {
      this.qualityIndicators = res.body.content;
      this.totalItems = res.body.totalElements;
    });
  }


  addNewQualityIndicator(): void {
    const modalRef = this.modalService.open(EditQualityIndicatorComponent, {size: 'lg', backdrop: 'static'});
    modalRef.componentInstance.init();
    modalRef.result.then(result => {
      if (result && result.update) {
        this.loadPage();
      }
    });
  }

  delete(qualityIndicator: QualityIndicator): void {
    const modalRef = this.modalService.open(DeleteQualityIndicatorComponent, {size: 'lg', backdrop: 'static'});
    modalRef.componentInstance.qualityIndicator = qualityIndicator;
    modalRef.result.then(result => {
      if (result && result.update) {
        this.loadPage();
      }
    });
  }

  edit(qualityIndicator: QualityIndicator): void {
    const modalRef = this.modalService.open(EditQualityIndicatorComponent, {size: 'lg', backdrop: 'static'});
    modalRef.componentInstance.qualityIndicator = qualityIndicator;
    modalRef.componentInstance.init();
    modalRef.result.then(result => {
      if (result && result.update) {
        this.loadPage();
      }
    });
  }

  showFilter(): void {
    const modelRef = this.modalService.open(FilterQualityIndicatorComponent, {size: 'lg', backdrop: 'static'});
    modelRef.componentInstance.codeFilter = this.codeFilter;
    modelRef.componentInstance.nameFilter = this.nameFilter;
    modelRef.componentInstance.materialResourceId = this.materialResourceId;
    modelRef.componentInstance.loadDirectories();
    modelRef.result.then(result => {
      if (result) {
        this.codeFilter = result.codeFilter;
        this.nameFilter = result.nameFilter;
        this.materialResourceId = result.materialResourceId;
        this.loadPage(1);
      }
    });
  }

  deleteFilters(): void {
    this.codeFilter = null;
    this.nameFilter = null;
    this.materialResourceId = null;
    this.loadPage(1);
  }
}
