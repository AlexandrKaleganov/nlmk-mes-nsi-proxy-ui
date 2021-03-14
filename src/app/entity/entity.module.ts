import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {SupplierModule} from './supplier/supplier.module';
import {MarkResourceModule} from './mark-resource/mark-resource.module';
import {ResourceComponent} from './resource/resource.component';
import {ResourceModule} from './resource/resource.module';

const routes: Routes = [
  {
    path: 'supplier',
    loadChildren: () => import('./supplier/supplier.module').then(m => m.SupplierModule)
  },
  {
    path: 'mark-resource',
    loadChildren: () => import('./mark-resource/mark-resource.module').then(m => m.MarkResourceModule)
  },
  {
    path: 'resource',
    loadChildren: () => import('./resource/resource.module').then(m => m.ResourceModule)
  }];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes),
    CommonModule, SupplierModule, MarkResourceModule, ResourceModule
  ]
})
export class EntityModule { }
