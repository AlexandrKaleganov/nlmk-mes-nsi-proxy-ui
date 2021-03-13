import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SupplierComponent} from './supplier.component';

const routes: Routes = [{
  path: 'supplier',
  children: [
    {path: '', component: SupplierComponent}],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SupplierRoutingModule {
}
