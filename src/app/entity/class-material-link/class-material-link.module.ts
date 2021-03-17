import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ClassMaterialLinkRoutingModule} from './class-material-link-routing.module';
import {EditClassMaterialLinkComponent} from './edit-class-material-link/edit-class-material-link.component';
import {DeleteClassMaterialLinkComponent} from './delete-class-material-link/delete-class-material-link.component';
import {FilterClassMaterialLinkComponent} from './filter-class-material-link/filter-class-material-link.component';
import {ClassMaterialLinkComponent} from './class-material-link.component';
import {NgbPaginationModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SupplierModule} from '../supplier/supplier.module';


@NgModule({
  declarations: [ClassMaterialLinkComponent, EditClassMaterialLinkComponent,
    DeleteClassMaterialLinkComponent, FilterClassMaterialLinkComponent],
  imports: [
    CommonModule,
    ClassMaterialLinkRoutingModule,
    NgbPaginationModule,
    FormsModule,
    ReactiveFormsModule,
    SupplierModule
  ],
  entryComponents: [EditClassMaterialLinkComponent, DeleteClassMaterialLinkComponent, FilterClassMaterialLinkComponent],
})
export class ClassMaterialLinkModule {
}
