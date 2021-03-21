import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {DocumentMaterialLinkRoutingModule} from './document-material-link-routing.module';
import {EditDocumentMaterialLinkComponent} from './edit-document-material-link/edit-document-material-link.component';
import {DeleteDocumentMaterialLinkComponent} from './delete-document-material-link/delete-document-material-link.component';
import {FilterDocumentMaterialLinkComponent} from './filter-document-material-link/filter-document-material-link.component';
import {DocumentMaterialLinkComponent} from './document-material-link.component';
import {NgbPaginationModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SupplierModule} from '../supplier/supplier.module';


@NgModule({
  declarations: [DocumentMaterialLinkComponent, EditDocumentMaterialLinkComponent,
    DeleteDocumentMaterialLinkComponent, FilterDocumentMaterialLinkComponent],
  imports: [
    CommonModule,
    DocumentMaterialLinkRoutingModule,
    NgbPaginationModule,
    FormsModule,
    ReactiveFormsModule,
    SupplierModule
  ],
  entryComponents: [EditDocumentMaterialLinkComponent, DeleteDocumentMaterialLinkComponent, FilterDocumentMaterialLinkComponent],
})
export class DocumentMaterialLinkModule {
}
