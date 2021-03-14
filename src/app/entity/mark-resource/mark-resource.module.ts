import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {MarkResourceRoutingModule} from './mark-resource-routing.module';
import {EditMarkResourceComponent} from './edit-mark-resource/edit-mark-resource.component';
import {DeleteMarkResourceComponent} from './delete-mark-resource/delete-mark-resource.component';
import {FilterMarkResourceComponent} from './filter-mark-resource/filter-mark-resource.component';
import {MarkResourceComponent} from './mark-resource.component';
import {NgbPaginationModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [MarkResourceComponent, EditMarkResourceComponent, DeleteMarkResourceComponent, FilterMarkResourceComponent],
  imports: [
    CommonModule,
    MarkResourceRoutingModule,
    NgbPaginationModule,
    FormsModule,
    ReactiveFormsModule
  ],
  entryComponents: [EditMarkResourceComponent, DeleteMarkResourceComponent, FilterMarkResourceComponent],
})
export class MarkResourceModule {
}
