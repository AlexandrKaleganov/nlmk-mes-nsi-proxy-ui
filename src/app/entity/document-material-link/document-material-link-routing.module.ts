import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DocumentMaterialLinkComponent} from './document-material-link.component';

const routes: Routes = [{
  path: 'document-material-link',
  children: [
    {path: '', component: DocumentMaterialLinkComponent}],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DocumentMaterialLinkRoutingModule { }
