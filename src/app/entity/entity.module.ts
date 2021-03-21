import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {SupplierModule} from './supplier/supplier.module';
import {MarkResourceModule} from './mark-resource/mark-resource.module';
import {ResourceModule} from './resource/resource.module';
import {TypeResourceModule} from './type-resource/type-resource.module';
import {ClassResourceModule} from './class-resource/class-resource.module';
import {TypeMaterialLinkModule} from './type-material-link/type-material-link.module';
import {ClassMaterialLinkModule} from './class-material-link/class-material-link.module';
import {QualityIndicatorModule} from './quality-indicator/quality-indicator.module';
import {QualityIndicatorMaterialLinkModule} from './quality-indicator-material-link/quality-indicator-material-link.module';
import {StructureCompanyModule} from './structure-company/structure-company.module';
import {StructureCompanyMaterialLinkModule} from './structure-company-material-link/structure-company-material-link.module';
import {RegulatoryDocumentModule} from './regulatory-document/regulatory-document.module';
import {DocumentMaterialLinkModule} from './document-material-link/document-material-link.module';

const routes: Routes = [
  {
    path: 'structure-company',
    loadChildren: () => import('./structure-company/structure-company.module').then(m => m.StructureCompanyModule)
  },
  {
    path: 'regulatory-document',
    loadChildren: () => import('./regulatory-document/regulatory-document.module').then(m => m.RegulatoryDocumentModule)
  },
  {
    path: 'structure-company-material-link',
    loadChildren: () => import('./structure-company-material-link/structure-company-material-link.module')
      .then(m => m.StructureCompanyMaterialLinkModule)
  },
  {
    path: 'supplier',
    loadChildren: () => import('./supplier/supplier.module').then(m => m.SupplierModule)
  },
  {
    path: 'mark-resource',
    loadChildren: () => import('./mark-resource/mark-resource.module').then(m => m.MarkResourceModule)
  },
  {
    path: 'document-material-link',
    loadChildren: () => import('./document-material-link/document-material-link.module').then(m => m.DocumentMaterialLinkModule)
  },
  {
    path: 'type-resource',
    loadChildren: () => import('./type-resource/type-resource.module').then(m => m.TypeResourceModule)
  },
  {
    path: 'class-resource',
    loadChildren: () => import('./class-resource/class-resource.module').then(m => m.ClassResourceModule)
  },
  {
    path: 'type-material-link',
    loadChildren: () => import('./type-material-link/type-material-link.module').then(m => m.TypeMaterialLinkModule)
  },
  {
    path: 'quality-indicator-material-link',
    loadChildren: () => import('./quality-indicator-material-link/quality-indicator-material-link.module')
      .then(m => m.QualityIndicatorMaterialLinkModule)
  },
  {
    path: 'class-material-link',
    loadChildren: () => import('./class-material-link/class-material-link.module').then(m => m.ClassMaterialLinkModule)
  },
  {
    path: 'resource',
    loadChildren: () => import('./resource/resource.module').then(m => m.ResourceModule)
  },
  {
    path: 'quality-indicator',
    loadChildren: () => import('./quality-indicator/quality-indicator.module').then(m => m.QualityIndicatorModule)
  }];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes),
    CommonModule, SupplierModule, MarkResourceModule, TypeResourceModule, ResourceModule,
    ClassResourceModule, TypeMaterialLinkModule, ClassMaterialLinkModule, QualityIndicatorModule, QualityIndicatorMaterialLinkModule,
    StructureCompanyModule, StructureCompanyMaterialLinkModule, RegulatoryDocumentModule, DocumentMaterialLinkModule
  ]
})
export class EntityModule {
}
