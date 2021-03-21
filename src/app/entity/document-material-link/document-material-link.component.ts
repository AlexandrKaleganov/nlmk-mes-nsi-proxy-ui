import { Component, OnInit } from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {HttpParams} from '@angular/common/http';
import {DocumentMaterialLinkService} from './document-material-link.service';
import {EditDocumentMaterialLinkComponent} from './edit-document-material-link/edit-document-material-link.component';
import {FilterDocumentMaterialLinkComponent} from './filter-document-material-link/filter-document-material-link.component';
import {DeleteDocumentMaterialLinkComponent} from './delete-document-material-link/delete-document-material-link.component';
import {ClassMaterialLink} from '../../shared/models/class-material-link.model';
import {DocumentMaterialLink} from '../../shared/models/document-material-link.model';

@Component({
  selector: 'app-document-material-link',
  templateUrl: './document-material-link.component.html',
  styleUrls: ['./document-material-link.component.css']
})
export class DocumentMaterialLinkComponent implements OnInit {
  documentMaterialLinks: DocumentMaterialLink[];
  documentMaterialLinkService: DocumentMaterialLinkService;
  totalItems: number;
  itemsPerPage = 20;
  page = 1;
  codeFilter: string;
  nameFilter: string;
  materialResourceId: string;
  regulatoryDocumentId: string;

  constructor(documentMaterialLinkService1: DocumentMaterialLinkService, public modalService: NgbModal) {
    this.documentMaterialLinkService = documentMaterialLinkService1;
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
    if (this.regulatoryDocumentId) {
      options = options.set('regulatoryDocumentId.equals', this.regulatoryDocumentId);
    }
    if (this.nameFilter) {
      options = options.set('name.contains', this.nameFilter);
    }
    this.documentMaterialLinkService.findAll(options).subscribe(res => {
      this.documentMaterialLinks = res.body.content;
      this.totalItems = res.body.totalElements;
    });
  }


  addNewResource(): void {
    const modalRef = this.modalService.open(EditDocumentMaterialLinkComponent, {size: 'lg', backdrop: 'static'});
    modalRef.componentInstance.loadDirectories();
    modalRef.componentInstance.init();
    modalRef.result.then(result => {
      if (result && result.update) {
        this.loadPage();
      }
    });
  }

  delete(documentMaterialLink: DocumentMaterialLink): void {
    const modalRef = this.modalService.open(DeleteDocumentMaterialLinkComponent, {size: 'lg', backdrop: 'static'});
    modalRef.componentInstance.documentMaterialLink = documentMaterialLink;
    modalRef.result.then(result => {
      if (result && result.update) {
        this.loadPage();
      }
    });
  }

  edit(documentMaterialLink: DocumentMaterialLink): void {
    const modalRef = this.modalService.open(EditDocumentMaterialLinkComponent, {size: 'lg', backdrop: 'static'});
    modalRef.componentInstance.documentMaterialLink = documentMaterialLink;
    modalRef.componentInstance.loadDirectories();
    modalRef.componentInstance.init();
    modalRef.result.then(result => {
      if (result && result.update) {
        this.loadPage();
      }
    });
  }

  showFilter(): void {
    const modalRef = this.modalService.open(FilterDocumentMaterialLinkComponent, {size: 'lg', backdrop: 'static'});
    modalRef.componentInstance.materialResourceId = this.materialResourceId;
    modalRef.componentInstance.regulatoryDocumentId = this.regulatoryDocumentId;
    modalRef.componentInstance.loadDirectories();
    modalRef.result.then(result => {
      if (result) {
        this.materialResourceId = result.materialResourceId;
        this.regulatoryDocumentId = result.regulatoryDocumentId;
        this.loadPage(1);
      }
    });
  }

  deleteFilters(): void {
    this.materialResourceId = null;
    this.regulatoryDocumentId = null;
    this.loadPage(1);
  }
}
