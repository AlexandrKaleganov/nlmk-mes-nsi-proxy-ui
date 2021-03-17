import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ClassMaterialLinkComponent} from './class-material-link.component';

const routes: Routes = [{
  path: 'class-material-link',
  children: [
    {path: '', component: ClassMaterialLinkComponent}],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClassMaterialLinkRoutingModule { }
