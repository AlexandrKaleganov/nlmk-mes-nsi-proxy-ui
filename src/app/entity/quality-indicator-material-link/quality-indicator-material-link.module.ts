import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {QualityIndicatorMaterialLinkRoutingModule} from './quality-indicator-material-link-routing.module';
import {EditQualityIndicatorMaterialLinkComponent} from './edit-quality-indicator-material-link/edit-quality-indicator-material-link.component';
import {DeleteQualityIndicatorMaterialLinkComponent} from './delete-quality-indicator-material-link/delete-quality-indicator-material-link.component';
import {FilterQualityIndicatorMaterialLinkComponent} from './filter-quality-indicator-material-link/filter-quality-indicator-material-link.component';
import {QualityIndicatorMaterialLinkComponent} from './quality-indicator-material-link.component';
import {NgbPaginationModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SupplierModule} from '../supplier/supplier.module';


@NgModule({
  declarations: [QualityIndicatorMaterialLinkComponent, EditQualityIndicatorMaterialLinkComponent,
    DeleteQualityIndicatorMaterialLinkComponent, FilterQualityIndicatorMaterialLinkComponent],
  imports: [
    CommonModule,
    QualityIndicatorMaterialLinkRoutingModule,
    NgbPaginationModule,
    FormsModule,
    ReactiveFormsModule,
    SupplierModule
  ],
  entryComponents: [EditQualityIndicatorMaterialLinkComponent, DeleteQualityIndicatorMaterialLinkComponent, FilterQualityIndicatorMaterialLinkComponent],
})
export class QualityIndicatorMaterialLinkModule {
}
