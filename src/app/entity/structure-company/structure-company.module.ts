import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StructureCompanyRoutingModule } from './structure-company-routing.module';
import { StructureCompanyComponent } from './structure-company.component';
import { NgbPaginationModule} from '@ng-bootstrap/ng-bootstrap';
import { EditStructureCompanyComponent } from './edit-structure-company/edit-structure-company.component';
import { DeleteStructureCompanyComponent } from './delete-structure-company/delete-structure-company.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ErrorComponent} from '../../shared/error/error.component';
import { FilterStructureCompanyComponent } from './filter-structure-company/filter-structure-company.component';
import {SupplierModule} from '../supplier/supplier.module';


@NgModule({
  declarations: [StructureCompanyComponent, EditStructureCompanyComponent, DeleteStructureCompanyComponent,
     FilterStructureCompanyComponent],
  imports: [
    CommonModule,
    StructureCompanyRoutingModule,
    NgbPaginationModule,
    ReactiveFormsModule,
    FormsModule,
    SupplierModule,
  ],
  exports: [],
  entryComponents: [EditStructureCompanyComponent, DeleteStructureCompanyComponent, FilterStructureCompanyComponent]
})
export class StructureCompanyModule { }
