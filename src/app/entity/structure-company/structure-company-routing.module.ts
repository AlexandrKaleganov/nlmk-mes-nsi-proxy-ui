import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {StructureCompanyComponent} from './structure-company.component';

const routes: Routes = [{
  path: 'structure-company',
  children: [
    {path: '', component: StructureCompanyComponent}],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StructureCompanyRoutingModule {
}
