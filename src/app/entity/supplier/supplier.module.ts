import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SupplierRoutingModule } from './supplier-routing.module';
import { SupplierComponent } from './supplier.component';
import { NgbPaginationModule} from '@ng-bootstrap/ng-bootstrap';
import { EditSupplierComponent } from './edit-supplier/edit-supplier.component';
import { DeleteSupplierComponent } from './delete-supplier/delete-supplier.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ErrorComponent} from '../../shared/error/error.component';
import { FilterSupplierComponent } from './filter-supplier/filter-supplier.component';


@NgModule({
  declarations: [SupplierComponent, EditSupplierComponent, DeleteSupplierComponent, ErrorComponent, FilterSupplierComponent],
  imports: [
    CommonModule,
    SupplierRoutingModule,
    NgbPaginationModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  exports: [ErrorComponent],
  entryComponents: [EditSupplierComponent, DeleteSupplierComponent, FilterSupplierComponent]
})
export class SupplierModule { }
