import {Component, OnInit} from '@angular/core';
import {SupplierService} from './supplier.service';
import {Supplier} from '../../shared/models/supplier.model';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {HttpParams} from '@angular/common/http';
import {EditSupplierComponent} from './edit-supplier/edit-supplier.component';
import {DeleteSupplierComponent} from './delete-supplier/delete-supplier.component';
import {FilterSupplierComponent} from './filter-supplier/filter-supplier.component';

@Component({
  selector: 'app-supplier',
  templateUrl: './supplier.component.html',
  styleUrls: ['./supplier.component.css']
})
export class SupplierComponent implements OnInit {
  suppliers: Supplier[];
  supplierService: SupplierService;
  totalItems: number;
  itemsPerPage = 20;
  page = 1;
  codeFilter: string;
  nameFilter: string;

  constructor(supplierService: SupplierService, public modalService: NgbModal) {
    this.supplierService = supplierService;
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
    this.supplierService.findAll(options).subscribe(res => {
      this.suppliers = res.body.content;
      this.totalItems = res.body.totalElements;
    });
  }


  addNewSupplier(): void {
    const modalRef = this.modalService.open(EditSupplierComponent, {size: 'lg', backdrop: 'static'});
    modalRef.componentInstance.init();
    modalRef.result.then(result => {
      if (result && result.update) {
        this.loadPage();
      }
    });
  }

  delete(supplier: Supplier): void {
    const modalRef = this.modalService.open(DeleteSupplierComponent, {size: 'lg', backdrop: 'static'});
    modalRef.componentInstance.supplier = supplier;
    modalRef.result.then(result => {
      if (result && result.update) {
        this.loadPage();
      }
    });
  }

  edit(supplier: Supplier): void {
    const modalRef = this.modalService.open(EditSupplierComponent, {size: 'lg', backdrop: 'static'});
    modalRef.componentInstance.supplier = supplier;
    modalRef.componentInstance.init();
    modalRef.result.then(result => {
      if (result && result.update) {
        this.loadPage();
      }
    });
  }

  showFilter(): void {
    const modalRef = this.modalService.open(FilterSupplierComponent, {size: 'lg', backdrop: 'static'});
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
