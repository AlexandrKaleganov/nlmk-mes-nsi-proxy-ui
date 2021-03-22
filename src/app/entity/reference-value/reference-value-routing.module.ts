import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ReferenceValueComponent} from './reference-value.component';

const routes: Routes = [{
  path: 'reference-value',
  children: [
    {path: '', component: ReferenceValueComponent}],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReferenceValueRoutingModule { }
