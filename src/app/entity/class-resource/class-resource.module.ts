import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ClassResourceRoutingModule} from './class-resource-routing.module';
import {EditClassResourceComponent} from './edit-class-resource/edit-class-resource.component';
import {DeleteClassResourceComponent} from './delete-class-resource/delete-class-resource.component';
import {FilterClassResourceComponent} from './filter-class-resource/filter-class-resource.component';
import {ClassResourceComponent} from './class-resource.component';
import {NgbPaginationModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SupplierModule} from '../supplier/supplier.module';


@NgModule({
  declarations: [ClassResourceComponent, EditClassResourceComponent, DeleteClassResourceComponent, FilterClassResourceComponent],
    imports: [
        CommonModule,
        ClassResourceRoutingModule,
        NgbPaginationModule,
        FormsModule,
        ReactiveFormsModule,
        SupplierModule
    ],
  entryComponents: [EditClassResourceComponent, DeleteClassResourceComponent, FilterClassResourceComponent],
})
export class ClassResourceModule {
}
