import {Component, OnInit} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {TypeResource} from '../../../shared/models/type-resource.model';
import {TypeResourceService} from '../../type-resource/type-resource.service';
import {ClassResource} from '../../../shared/models/class-resource.model';
import {Resource} from '../../../shared/models/resource.model';
import {ResourceService} from '../../resource/resource.service';
import {StructureCompanyService} from '../../structure-company/structure-company.service';
import {StructureCompany} from '../../../shared/models/structure-company';

@Component({
  selector: 'app-filter-structure-company-material-link',
  templateUrl: './filter-structure-company-material-link.component.html',
  styleUrls: ['./filter-structure-company-material-link.component.css']
})
export class FilterStructureCompanyMaterialLinkComponent implements OnInit {
  resourceService: ResourceService;
  structureCompanyService: StructureCompanyService;

  materialResourceTypeList1: StructureCompany[] = [];
  materialResourceList: Resource[] = [];

  materialResourceId: string;
  materialResourceStructureId: string;


  constructor(public activeModal: NgbActiveModal, resourceService1: ResourceService, structureCompanyService: StructureCompanyService) {
    this.resourceService = resourceService1;
    this.structureCompanyService = structureCompanyService;
  }

  ngOnInit(): void {
  }

  close(): void {
    this.activeModal.close();
  }

  loadDirectories(): void {
    this.structureCompanyService.findAllList().subscribe(res => {
      this.materialResourceTypeList1 = res.body;
    });
    this.resourceService.findAllList().subscribe(res => {
      this.materialResourceList = res.body;
    });
  }

  trackById(index: number, item: Resource): any {
    return item.id;
  }

  trackByIdType(index: number, item: StructureCompany): any {
    return item.id;
  }

  trackByIdClass(index: number, item: ClassResource): any {
    return item.id;
  }

  filter(): void {
    this.activeModal.close({
      materialResourceId: this.materialResourceId,
      materialResourceTypeId: this.materialResourceStructureId,
    });
  }
}
