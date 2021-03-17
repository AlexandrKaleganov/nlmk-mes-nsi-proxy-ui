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
import {QualityIndicator} from '../../../shared/models/quality-indicator.model';
import {QualityIndicatorService} from '../../quality-indicator/quality-indicator.service';

@Component({
  selector: 'app-filter-quality-indicator-material-link',
  templateUrl: './filter-quality-indicator-material-link.component.html',
  styleUrls: ['./filter-quality-indicator-material-link.component.css']
})
export class FilterQualityIndicatorMaterialLinkComponent implements OnInit {
  resourceService: ResourceService;
  qualityIndicatorService: QualityIndicatorService;

  qualityIndicators: QualityIndicator[] = [];
  materialResourceList: Resource[] = [];

  materialResourceId: string;
  qualityCharacteristicId: string;


  constructor(public activeModal: NgbActiveModal, resourceService1: ResourceService, qualityIndicatorService: QualityIndicatorService) {
    this.resourceService = resourceService1;
    this.qualityIndicatorService = qualityIndicatorService;
  }

  ngOnInit(): void {
  }

  close(): void {
    this.activeModal.close();
  }

  loadDirectories(): void {
    this.qualityIndicatorService.findAllList().subscribe(res => {
      this.qualityIndicators = res.body;
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
      qualityCharacteristicId: this.qualityCharacteristicId,
    });
  }
}
