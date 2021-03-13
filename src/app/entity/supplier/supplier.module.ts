import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SupplierRoutingModule } from './supplier-routing.module';
import { SupplierComponent } from './supplier.component';
import { NgbPaginationModule} from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [SupplierComponent],
  imports: [
    CommonModule,
    SupplierRoutingModule,
    NgbPaginationModule
  ]
})
export class SupplierModule { }
