import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MarkResourceComponent} from './mark-resource.component';

const routes: Routes = [{
  path: 'mark-resource',
  children: [
    {path: '', component: MarkResourceComponent}],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MarkResourceRoutingModule { }
