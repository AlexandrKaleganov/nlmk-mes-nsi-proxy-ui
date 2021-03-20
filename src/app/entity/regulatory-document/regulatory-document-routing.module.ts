import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RegulatoryDocumentComponent} from './regulatory-document.component';

const routes: Routes = [{
  path: 'regulatory-document',
  children: [
    {path: '', component: RegulatoryDocumentComponent}],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegulatoryDocumentRoutingModule {
}
