import {Component, OnInit} from '@angular/core';
import {RegulatoryDocumentService} from './regulatory-document.service';
import {Supplier} from '../../shared/models/supplier.model';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {HttpParams} from '@angular/common/http';
import {EditRegulatoryDocumentComponent} from './edit-regulatory-document/edit-regulatory-document.component';
import {DeleteRegulatoryDocumentComponent} from './delete-regulatory-document/delete-regulatory-document.component';
import {FilterRegulatoryDocumentComponent} from './filter-regulatory-document/filter-regulatory-document.component';
import {RegulatoryDocument} from '../../shared/models/regulatory-document.model';

@Component({
  selector: 'app-regulatory-document',
  templateUrl: './regulatory-document.component.html',
  styleUrls: ['./regulatory-document.component.css']
})
export class RegulatoryDocumentComponent implements OnInit {
  regulatoryDocuments: RegulatoryDocument[];
  regulatoryDocumentService: RegulatoryDocumentService;
  totalItems: number;
  itemsPerPage = 20;
  page = 1;
  codeFilter: string;
  nameFilter: string;

  constructor(regulatoryDocumentService1: RegulatoryDocumentService, public modalService: NgbModal) {
    this.regulatoryDocumentService = regulatoryDocumentService1;
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
    this.regulatoryDocumentService.findAll(options).subscribe(res => {
      this.regulatoryDocuments = res.body.content;
      this.totalItems = res.body.totalElements;
    });
  }


  addNew(): void {
    const modalRef = this.modalService.open(EditRegulatoryDocumentComponent, {size: 'lg', backdrop: 'static'});
    modalRef.componentInstance.init();
    modalRef.result.then(result => {
      if (result && result.update) {
        this.loadPage();
      }
    });
  }

  delete(regulatoryDocument: RegulatoryDocument): void {
    const modalRef = this.modalService.open(DeleteRegulatoryDocumentComponent, {size: 'lg', backdrop: 'static'});
    modalRef.componentInstance.regulatoryDocument = regulatoryDocument;
    modalRef.result.then(result => {
      if (result && result.update) {
        this.loadPage();
      }
    });
  }

  edit(regulatoryDocument: RegulatoryDocument): void {
    const modalRef = this.modalService.open(EditRegulatoryDocumentComponent, {size: 'lg', backdrop: 'static'});
    modalRef.componentInstance.regulatoryDocument = regulatoryDocument;
    modalRef.componentInstance.init();
    modalRef.result.then(result => {
      if (result && result.update) {
        this.loadPage();
      }
    });
  }

  showFilter(): void {
    const modalRef = this.modalService.open(FilterRegulatoryDocumentComponent, {size: 'lg', backdrop: 'static'});
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

  getString(b: boolean): string {
    return b.toString();
  }
  deleteFilters(): void {
    this.codeFilter = null;
    this.nameFilter = null;
    this.loadPage(1);
  }
}
