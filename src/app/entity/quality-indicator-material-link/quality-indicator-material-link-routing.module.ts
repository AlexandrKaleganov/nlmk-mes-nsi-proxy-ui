import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {QualityIndicatorMaterialLinkComponent} from './quality-indicator-material-link.component';

const routes: Routes = [{
  path: 'quality-indicator-material-link',
  children: [
    {path: '', component: QualityIndicatorMaterialLinkComponent}],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QualityIndicatorMaterialLinkRoutingModule { }
