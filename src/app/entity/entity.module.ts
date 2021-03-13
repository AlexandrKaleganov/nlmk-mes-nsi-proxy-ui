import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {SupplierModule} from './supplier/supplier.module';

const routes: Routes = [
  {
    path: 'supplier',
    loadChildren: () => import('./supplier/supplier.module').then(m => m.SupplierModule)
  }];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes),
    CommonModule, SupplierModule
  ]
})
export class EntityModule { }
