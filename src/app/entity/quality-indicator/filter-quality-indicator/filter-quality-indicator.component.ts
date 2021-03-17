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
  selector: 'app-filter-quality-indicator',
  templateUrl: './filter-quality-indicator.component.html',
  styleUrls: ['./filter-quality-indicator.component.css']
})
export class FilterQualityIndicatorComponent implements OnInit {
  codeFilter: string;
  nameFilter: string;
  resourceService: ResourceService;

  resources: Resource[] = [];

  materialResourceId: string;


  constructor(public activeModal: NgbActiveModal, resourceService1: ResourceService) {
    this.resourceService = resourceService1;
  }

  ngOnInit(): void {
  }

  close(): void {
    this.activeModal.close();
  }

  loadDirectories(): void {
    this.resourceService.findAllList().subscribe(res => {
      this.resources = res.body;
    });
    this.resourceService.findAllList().subscribe(res => {
      this.resources = res.body;
    });
  }

  trackByIdMark(index: number, item: MarkResource): any {
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
      codeFilter: this.codeFilter,
      nameFilter: this.nameFilter,
      materialResourceId: this.materialResourceId,
    });
  }
}
