import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {StructureCompanyMaterialLinkComponent} from './structure-company-material-link.component';

const routes: Routes = [{
  path: 'structure-company-material-link',
  children: [
    {path: '', component: StructureCompanyMaterialLinkComponent}],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StructureCompanyMaterialLinkRoutingModule { }
