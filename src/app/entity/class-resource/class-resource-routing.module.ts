import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ClassResourceComponent} from './class-resource.component';

const routes: Routes = [{
  path: 'class-resource',
  children: [
    {path: '', component: ClassResourceComponent}],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClassResourceRoutingModule { }
