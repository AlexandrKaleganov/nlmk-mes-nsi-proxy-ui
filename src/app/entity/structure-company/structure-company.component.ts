import {Component, OnInit} from '@angular/core';
import {StructureCompanyService} from './structure-company.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {HttpParams} from '@angular/common/http';
import {EventManagerService} from '../../shared/service/event-manager.service';
import {EditStructureCompanyComponent} from './edit-structure-company/edit-structure-company.component';
import {DeleteStructureCompanyComponent} from './delete-structure-company/delete-structure-company.component';
import {FilterStructureCompanyComponent} from './filter-structure-company/filter-structure-company.component';
import {StructureCompany} from '../../shared/models/structure-company';

@Component({
  selector: 'app-structure-company',
  templateUrl: './structure-company.component.html',
  styleUrls: ['./structure-company.component.css']
})
export class StructureCompanyComponent implements OnInit {
  structureCompanies: StructureCompany[];
  structureCompanyService1: StructureCompanyService;
  totalItems: number;
  itemsPerPage = 20;
  page = 1;
  codeFilter: string;
  nameFilter: string;
  parentIdFilter: string;

  constructor(structureCompanyService: StructureCompanyService, public modalService: NgbModal) {
    this.structureCompanyService1 = structureCompanyService;
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
    if (this.parentIdFilter) {
      options = options.set('parentId.equals', this.parentIdFilter);
    }
    this.structureCompanyService1.findAll(options).subscribe(res => {
      this.structureCompanies = res.body.content;
      this.totalItems = res.body.totalElements;
    });
  }


  addNewSupplier(): void {
    const modalRef = this.modalService.open(EditStructureCompanyComponent, {size: 'lg', backdrop: 'static'});
    modalRef.componentInstance.loaDirectories();
    modalRef.componentInstance.init();
    modalRef.result.then(result => {
      if (result && result.update) {
        this.loadPage();
      }
    });
  }

  delete(supplier: StructureCompany): void {
    const modalRef = this.modalService.open(DeleteStructureCompanyComponent, {size: 'lg', backdrop: 'static'});
    modalRef.componentInstance.supplier = supplier;
    modalRef.result.then(result => {
      if (result && result.update) {
        this.loadPage();
      }
    });
  }

  edit(structureCompany: StructureCompany): void {
    const modalRef = this.modalService.open(EditStructureCompanyComponent, {size: 'lg', backdrop: 'static'});
    modalRef.componentInstance.loaDirectories();
    modalRef.componentInstance.structureCompany = structureCompany;
    modalRef.componentInstance.init();
    modalRef.result.then(result => {
      if (result && result.update) {
        this.loadPage();
      }
    });
  }

  showFilter(): void {
    const modalRef = this.modalService.open(FilterStructureCompanyComponent, {size: 'lg', backdrop: 'static'});
    modalRef.componentInstance.loaDirectories();
    modalRef.componentInstance.codeFilter = this.codeFilter;
    modalRef.componentInstance.nameFilter = this.nameFilter;
    modalRef.componentInstance.parentIdFilter = this.parentIdFilter;
    modalRef.result.then(result => {
      console.log(result);
      if (result) {
        this.codeFilter = result.codeFilter;
        this.nameFilter = result.nameFilter;
        this.parentIdFilter = result.parentIdFilter;
        this.loadPage(1);
      }
    });
  }

  deleteFilters(): void {
    this.codeFilter = null;
    this.nameFilter = null;
    this.parentIdFilter = null;
    this.loadPage(1);
  }
}
