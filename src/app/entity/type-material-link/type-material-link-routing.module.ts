import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TypeMaterialLinkComponent} from './type-material-link.component';

const routes: Routes = [{
  path: 'type-material-link',
  children: [
    {path: '', component: TypeMaterialLinkComponent}],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TypeMaterialLinkRoutingModule { }
