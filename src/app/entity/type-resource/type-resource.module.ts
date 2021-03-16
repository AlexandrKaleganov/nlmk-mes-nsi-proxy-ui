import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {TypeResourceRoutingModule} from './type-resource-routing.module';
import {EditTypeResourceComponent} from './edit-type-resource/edit-type-resource.component';
import {DeleteTypeResourceComponent} from './delete-type-resource/delete-type-resource.component';
import {FilterTypeResourceComponent} from './filter-type-resource/filter-type-resource.component';
import {TypeResourceComponent} from './type-resource.component';
import {NgbPaginationModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [TypeResourceComponent, EditTypeResourceComponent, DeleteTypeResourceComponent, FilterTypeResourceComponent],
  imports: [
    CommonModule,
    TypeResourceRoutingModule,
    NgbPaginationModule,
    FormsModule,
    ReactiveFormsModule
  ],
  entryComponents: [EditTypeResourceComponent, DeleteTypeResourceComponent, FilterTypeResourceComponent],
})
export class TypeResourceModule {
}
