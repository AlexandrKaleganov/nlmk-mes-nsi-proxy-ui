import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {QualityIndicatorRoutingModule} from './quality-indicator-routing.module';
import {EditQualityIndicatorComponent} from './edit-quality-indicator/edit-quality-indicator.component';
import {DeleteQualityIndicatorComponent} from './delete-quality-indicator/delete-quality-indicator.component';
import {FilterQualityIndicatorComponent} from './filter-quality-indicator/filter-quality-indicator.component';
import {QualityIndicatorComponent} from './quality-indicator.component';
import {NgbPaginationModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SupplierModule} from '../supplier/supplier.module';


@NgModule({
  declarations: [QualityIndicatorComponent, EditQualityIndicatorComponent,
    DeleteQualityIndicatorComponent, FilterQualityIndicatorComponent],
  imports: [
    CommonModule,
    QualityIndicatorRoutingModule,
    NgbPaginationModule,
    FormsModule,
    ReactiveFormsModule,
    SupplierModule
  ],
  entryComponents: [EditQualityIndicatorComponent, DeleteQualityIndicatorComponent, FilterQualityIndicatorComponent],
})
export class QualityIndicatorModule {
}
