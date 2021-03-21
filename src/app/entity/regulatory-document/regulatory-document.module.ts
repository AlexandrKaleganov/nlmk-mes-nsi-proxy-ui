import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {RegulatoryDocumentRoutingModule} from './regulatory-document-routing.module';
import {RegulatoryDocumentComponent} from './regulatory-document.component';
import {NgbPaginationModule} from '@ng-bootstrap/ng-bootstrap';
import {EditRegulatoryDocumentComponent} from './edit-regulatory-document/edit-regulatory-document.component';
import {DeleteRegulatoryDocumentComponent} from './delete-regulatory-document/delete-regulatory-document.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FilterRegulatoryDocumentComponent} from './filter-regulatory-document/filter-regulatory-document.component';
import {AppModule} from '../../app.module';
import {BooleanPipe} from '../../shared/pipe/boolean.pipe';
import {BooleanNamePipe} from '../../shared/pipe/boolean-name.pipe';
import {SupplierModule} from '../supplier/supplier.module';


@NgModule({
  declarations: [RegulatoryDocumentComponent, EditRegulatoryDocumentComponent,  BooleanPipe, BooleanNamePipe,
    DeleteRegulatoryDocumentComponent, FilterRegulatoryDocumentComponent],
    imports: [
        CommonModule,
        RegulatoryDocumentRoutingModule,
        NgbPaginationModule,
        ReactiveFormsModule,
        FormsModule,
        SupplierModule,
    ],
  exports: [ BooleanPipe, BooleanNamePipe],
  entryComponents: [EditRegulatoryDocumentComponent, DeleteRegulatoryDocumentComponent, FilterRegulatoryDocumentComponent]
})
export class RegulatoryDocumentModule {
}
