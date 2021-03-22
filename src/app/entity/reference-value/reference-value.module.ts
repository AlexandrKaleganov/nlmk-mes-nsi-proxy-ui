import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ReferenceValueRoutingModule} from './reference-value-routing.module';
import {EditReferenceValueComponent} from './edit-reference-value/edit-reference-value.component';
import {DeleteReferenceValueComponent} from './delete-reference-value/delete-reference-value.component';
import {FilterReferenceValueComponent} from './filter-reference-value/filter-reference-value.component';
import {ReferenceValueComponent} from './reference-value.component';
import {NgbPaginationModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SupplierModule} from '../supplier/supplier.module';


@NgModule({
  declarations: [ReferenceValueComponent, EditReferenceValueComponent, DeleteReferenceValueComponent, FilterReferenceValueComponent],
  imports: [
    CommonModule,
    ReferenceValueRoutingModule,
    NgbPaginationModule,
    FormsModule,
    ReactiveFormsModule,
    SupplierModule
  ],
  entryComponents: [EditReferenceValueComponent, DeleteReferenceValueComponent, FilterReferenceValueComponent],
})
export class ReferenceValueModule {
}
