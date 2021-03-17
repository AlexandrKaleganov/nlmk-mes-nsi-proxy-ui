import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {QualityIndicatorComponent} from './quality-indicator.component';

const routes: Routes = [{
  path: 'quality-indicator',
  children: [
    {path: '', component: QualityIndicatorComponent}],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QualityIndicatorRoutingModule { }
