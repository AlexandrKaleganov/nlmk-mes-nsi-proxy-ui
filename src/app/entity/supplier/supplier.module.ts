import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SupplierRoutingModule } from './supplier-routing.module';
import { SupplierComponent } from './supplier.component';
import { NgbPaginationModule} from '@ng-bootstrap/ng-bootstrap';
import { EditSupplierComponent } from './edit-supplier/edit-supplier.component';
import { DeleteSupplierComponent } from './delete-supplier/delete-supplier.component';
import {ReactiveFormsModule} from '@angular/forms';
import {ErrorComponent} from '../../shared/error/error.component';


@NgModule({
  declarations: [SupplierComponent, EditSupplierComponent, DeleteSupplierComponent, ErrorComponent],
  imports: [
    CommonModule,
    SupplierRoutingModule,
    NgbPaginationModule,
    ReactiveFormsModule,
  ],
  exports: [ErrorComponent],
  entryComponents: [EditSupplierComponent, DeleteSupplierComponent]
})
export class SupplierModule { }
