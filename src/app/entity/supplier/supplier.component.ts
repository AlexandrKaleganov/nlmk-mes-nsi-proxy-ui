import {Component, OnInit} from '@angular/core';
import {SupplierService} from './supplier.service';
import {Supplier} from '../../shared/models/supplier.model';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {HttpParams} from '@angular/common/http';
import {EventManagerService} from '../../shared/service/event-manager.service';

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
  loginFilter: string;
  domainFilter: string;
  firstNameFilter: string;
  eventManagerService: EventManagerService;

  constructor(eventManagerService: EventManagerService, supplierService: SupplierService, public modalService: NgbModal) {
    this.supplierService = supplierService;
    this.eventManagerService = eventManagerService;
  }

  ngOnInit(): void {
    this.registerChangeInApps();
    this.loadPage();
  }

  registerChangeInApps(): void {
    this.eventManagerService.map$.subscribe((map: Map<any, any>) => {
      if (map.has('modifySupplier')) {
        this.loadPage();
      }
    });
  }

  loadPage(page?: number): void {
    const pageToLoad: number = page ? page : this.page;
    console.log(pageToLoad);
    let options: HttpParams = new HttpParams();
    if (pageToLoad !== undefined) {
      options = options.set('page', (pageToLoad - 1).toString());
    }
    options = options.set('size', this.itemsPerPage.toString());
    options = options.set('sort', 'id');
    if (this.loginFilter) {
      options = options.set('login', this.loginFilter);
    }
    if (this.domainFilter) {
      options = options.set('domain', this.domainFilter);
    }
    if (this.firstNameFilter) {
      options = options.set('firstName', this.firstNameFilter);
    }
    this.supplierService.findAll(options).subscribe(res => {
      this.suppliers = res.body.content;
      this.totalItems = res.body.totalElements;
      console.warn(this.totalItems);
    });
  }


  addNewSupplier(): void {
    // const modelRef = this.modalService.open(CreateSupplierComponent, {size: 'lg', backdrop: 'static'});
    // modelRef.result.then(res => {
    //   if (res) {
    //     this.loadPage(1);
    //   }
    // });
  }

  delete(supplier: Supplier): void {
    console.log(supplier);
  }

  edit(supplier: Supplier): void {
    // const modelRef = this.modalService.open(CreateSupplierComponent, {size: 'lg', backdrop: 'static'});
    // modelRef.componentInstance.Suppliers = supplier;
    // modelRef.componentInstance.currentRoles = this.currentRoles;
    // modelRef.componentInstance.init();
    // modelRef.result.then(res => {
    //   if (res) {
    //     this.loadPage(1);
    //   }
    // });
  }

  showFilter(): void {
    // const modelRef = this.modalService.open(FilterSupplierComponent, {size: 'lg', backdrop: 'static'});
    // modelRef.componentInstance.loginFilter = this.loginFilter;
    // modelRef.componentInstance.domainFilter = this.domainFilter;
    // modelRef.componentInstance.firstNameFilter = this.firstNameFilter;
    // modelRef.result.then(result => {
    //   console.log(result);
    //   if (result) {
    //     this.loginFilter = result.loginFilter;
    //     this.firstNameFilter = result.firstNameFilter;
    //     this.domainFilter = result.domainFilter;
    //     this.loadPage(1);
    //   }
    // });
  }

  deleteFilters(): void {
    this.loginFilter = null;
    this.firstNameFilter = null;
    this.domainFilter = null;
    this.loadPage(1);
  }
}
