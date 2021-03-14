import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ResourceRoutingModule} from './resource-routing.module';
import {EditResourceComponent} from './edit-resource/edit-resource.component';
import {DeleteResourceComponent} from './delete-resource/delete-resource.component';
import {FilterResourceComponent} from './filter-resource/filter-resource.component';
import {ResourceComponent} from './resource.component';
import {NgbPaginationModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SupplierModule} from '../supplier/supplier.module';


@NgModule({
  declarations: [ResourceComponent, EditResourceComponent, DeleteResourceComponent, FilterResourceComponent],
  imports: [
    CommonModule,
    ResourceRoutingModule,
    NgbPaginationModule,
    FormsModule,
    ReactiveFormsModule,
    SupplierModule
  ],
  entryComponents: [EditResourceComponent, DeleteResourceComponent, FilterResourceComponent],
})
export class ResourceModule {
}
