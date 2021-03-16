import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TypeResourceComponent} from './type-resource.component';

const routes: Routes = [{
  path: 'type-resource',
  children: [
    {path: '', component: TypeResourceComponent}],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TypeResourceRoutingModule { }
