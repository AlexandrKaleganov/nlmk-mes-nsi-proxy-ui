import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {StructureCompanyMaterialLinkRoutingModule} from './structure-company-material-link-routing.module';
import {EditStructureCompanyMaterialLinkComponent} from './edit-structure-company-material-link/edit-structure-company-material-link.component';
import {DeleteStructureCompanyMaterialLinkComponent} from './delete-structure-company-material-link/delete-structure-company-material-link.component';
import {FilterStructureCompanyMaterialLinkComponent} from './filter-structure-company-material-link/filter-structure-company-material-link.component';
import {StructureCompanyMaterialLinkComponent} from './structure-company-material-link.component';
import {NgbPaginationModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SupplierModule} from '../supplier/supplier.module';


@NgModule({
  declarations: [StructureCompanyMaterialLinkComponent, EditStructureCompanyMaterialLinkComponent,
    DeleteStructureCompanyMaterialLinkComponent, FilterStructureCompanyMaterialLinkComponent],
  imports: [
    CommonModule,
    StructureCompanyMaterialLinkRoutingModule,
    NgbPaginationModule,
    FormsModule,
    ReactiveFormsModule,
    SupplierModule
  ],
  entryComponents: [EditStructureCompanyMaterialLinkComponent, DeleteStructureCompanyMaterialLinkComponent, FilterStructureCompanyMaterialLinkComponent],
})
export class StructureCompanyMaterialLinkModule {
}
