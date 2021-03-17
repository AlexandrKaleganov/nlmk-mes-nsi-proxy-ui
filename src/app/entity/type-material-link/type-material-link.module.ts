import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {TypeMaterialLinkRoutingModule} from './type-material-link-routing.module';
import {EditTypeMaterialLinkComponent} from './edit-type-material-link/edit-type-material-link.component';
import {DeleteTypeMaterialLinkComponent} from './delete-type-material-link/delete-type-material-link.component';
import {FilterTypeMaterialLinkComponent} from './filter-type-material-link/filter-type-material-link.component';
import {TypeMaterialLinkComponent} from './type-material-link.component';
import {NgbPaginationModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SupplierModule} from '../supplier/supplier.module';


@NgModule({
  declarations: [TypeMaterialLinkComponent, EditTypeMaterialLinkComponent,
    DeleteTypeMaterialLinkComponent, FilterTypeMaterialLinkComponent],
  imports: [
    CommonModule,
    TypeMaterialLinkRoutingModule,
    NgbPaginationModule,
    FormsModule,
    ReactiveFormsModule,
    SupplierModule
  ],
  entryComponents: [EditTypeMaterialLinkComponent, DeleteTypeMaterialLinkComponent, FilterTypeMaterialLinkComponent],
})
export class TypeMaterialLinkModule {
}
