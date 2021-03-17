import {Component, OnInit} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {MarkResource} from '../../../shared/models/mark-resource.class';
import {TypeResource} from '../../../shared/models/type-resource.model';
import {MarkResourceService} from '../../mark-resource/mark-resource.service';
import {TypeResourceService} from '../../type-resource/type-resource.service';
import {ClassResource} from '../../../shared/models/class-resource.model';
import {ClassResourceService} from '../../class-resource/class-resource.service';
import {Resource} from '../../../shared/models/resource.model';
import {ResourceService} from '../../resource/resource.service';

@Component({
  selector: 'app-filter-type-material-link',
  templateUrl: './filter-type-material-link.component.html',
  styleUrls: ['./filter-type-material-link.component.css']
})
export class FilterTypeMaterialLinkComponent implements OnInit {
  resourceService: ResourceService;
  typeResourceService: TypeResourceService;

  materialResourceTypeList: TypeResource[] = [];
  materialResourceList: Resource[] = [];

  materialResourceId: string;
  materialResourceTypeId: string;


  constructor(public activeModal: NgbActiveModal, resourceService1: ResourceService, typeResourceService: TypeResourceService) {
    this.resourceService = resourceService1;
    this.typeResourceService = typeResourceService;
  }

  ngOnInit(): void {
  }

  close(): void {
    this.activeModal.close();
  }

  loadDirectories(): void {
    this.typeResourceService.findAllList().subscribe(res => {
      this.materialResourceTypeList = res.body;
    });
    this.resourceService.findAllList().subscribe(res => {
      this.materialResourceList = res.body;
    });
  }

  trackById(index: number, item: Resource): any {
    return item.id;
  }

  trackByIdType(index: number, item: TypeResource): any {
    return item.id;
  }

  trackByIdClass(index: number, item: ClassResource): any {
    return item.id;
  }

  filter(): void {
    this.activeModal.close({
      materialResourceId: this.materialResourceId,
      materialResourceTypeId: this.materialResourceTypeId,
    });
  }
}
