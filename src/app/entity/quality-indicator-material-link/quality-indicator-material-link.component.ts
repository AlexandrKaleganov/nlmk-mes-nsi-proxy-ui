import { Component, OnInit } from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {HttpParams} from '@angular/common/http';
import {QualityIndicatorMaterialLinkService} from './quality-indicator-material-link.service';
import {EditQualityIndicatorMaterialLinkComponent} from './edit-quality-indicator-material-link/edit-quality-indicator-material-link.component';
import {FilterQualityIndicatorMaterialLinkComponent} from './filter-quality-indicator-material-link/filter-quality-indicator-material-link.component';
import {DeleteQualityIndicatorMaterialLinkComponent} from './delete-quality-indicator-material-link/delete-quality-indicator-material-link.component';
import {TypeMaterialLink} from '../../shared/models/type-material-link.model';
import {QualityIndicatorMaterialLink} from '../../shared/models/quality-indicator-material-link.model';

@Component({
  selector: 'app-quality-indicator-material-link',
  templateUrl: './quality-indicator-material-link.component.html',
  styleUrls: ['./quality-indicator-material-link.component.css']
})
export class QualityIndicatorMaterialLinkComponent implements OnInit {
  qualityIndicatorMaterialLinks: QualityIndicatorMaterialLink[];
  typeMaterialLinkService: QualityIndicatorMaterialLinkService;
  totalItems: number;
  itemsPerPage = 20;
  page = 1;
  codeFilter: string;
  nameFilter: string;
  materialResourceId: string;
  qualityCharacteristicId: string;

  constructor(resourceService1: QualityIndicatorMaterialLinkService, public modalService: NgbModal) {
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
    if (this.qualityCharacteristicId) {
      options = options.set('qualityCharacteristicId.equals', this.qualityCharacteristicId);
    }
    if (this.nameFilter) {
      options = options.set('name.contains', this.nameFilter);
    }
    this.typeMaterialLinkService.findAll(options).subscribe(res => {
      this.qualityIndicatorMaterialLinks = res.body.content;
      this.totalItems = res.body.totalElements;
    });
  }


  addNewResource(): void {
    const modalRef = this.modalService.open(EditQualityIndicatorMaterialLinkComponent, {size: 'lg', backdrop: 'static'});
    modalRef.componentInstance.loadDirectories();
    modalRef.componentInstance.init();
    modalRef.result.then(result => {
      if (result && result.update) {
        this.loadPage();
      }
    });
  }

  delete(qualityIndicatorMaterialLink: QualityIndicatorMaterialLink): void {
    const modalRef = this.modalService.open(DeleteQualityIndicatorMaterialLinkComponent, {size: 'lg', backdrop: 'static'});
    modalRef.componentInstance.qualityIndicatorMaterialLink = qualityIndicatorMaterialLink;
    modalRef.result.then(result => {
      if (result && result.update) {
        this.loadPage();
      }
    });
  }

  edit(qualityIndicatorMaterialLink: QualityIndicatorMaterialLink): void {
    const modalRef = this.modalService.open(EditQualityIndicatorMaterialLinkComponent, {size: 'lg', backdrop: 'static'});
    modalRef.componentInstance.qualityIndicatorMaterialLink = qualityIndicatorMaterialLink;
    modalRef.componentInstance.loadDirectories();
    modalRef.componentInstance.init();
    modalRef.result.then(result => {
      if (result && result.update) {
        this.loadPage();
      }
    });
  }

  showFilter(): void {
    const modalRef = this.modalService.open(FilterQualityIndicatorMaterialLinkComponent, {size: 'lg', backdrop: 'static'});
    modalRef.componentInstance.materialResourceId = this.materialResourceId;
    modalRef.componentInstance.materialResourceTypeId = this.qualityCharacteristicId;
    modalRef.componentInstance.loadDirectories();
    modalRef.result.then(result => {
      if (result) {
        this.materialResourceId = result.materialResourceId;
        this.qualityCharacteristicId = result.qualityCharacteristicId;
        this.loadPage(1);
      }
    });
  }

  deleteFilters(): void {
    this.materialResourceId = null;
    this.qualityCharacteristicId = null;
    this.loadPage(1);
  }
}
