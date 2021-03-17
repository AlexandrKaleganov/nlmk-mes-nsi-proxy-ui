import {Component, OnInit} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {FormBuilder, Validators} from '@angular/forms';
import * as moment from 'moment';
import {DATE_TIME_FORMAT} from '../../../shared/constant/input.constant';
import {HttpResponse} from '@angular/common/http';
import {QualityIndicatorMaterialLinkService} from '../quality-indicator-material-link.service';
import {Resource} from '../../../shared/models/resource.model';
import {Supplier} from '../../../shared/models/supplier.model';
import {MarkResource} from '../../../shared/models/mark-resource.class';
import {ResourceService} from '../../resource/resource.service';
import {TypeResourceService} from '../../type-resource/type-resource.service';
import {TypeResource} from '../../../shared/models/type-resource.model';
import {QualityIndicatorMaterialLink} from '../../../shared/models/quality-indicator-material-link.model';
import {QualityIndicator} from '../../../shared/models/quality-indicator.model';
import {QualityIndicatorService} from '../../quality-indicator/quality-indicator.service';

@Component({
  selector: 'app-edit-quality-indicator-material-link',
  templateUrl: './edit-quality-indicator-material-link.component.html',
  styleUrls: ['./edit-quality-indicator-material-link.component.css']
})
export class EditQualityIndicatorMaterialLinkComponent implements OnInit {
  qualityIndicatorMaterialLink: QualityIndicatorMaterialLink = new QualityIndicatorMaterialLink();
  isSaving = false;
  qualityIndicatorMaterialLinkService: QualityIndicatorMaterialLinkService;
  errorMessage: string | undefined;
  resourceService: ResourceService;
  qualityIndicatorService: QualityIndicatorService;
  qualityIndicators: QualityIndicator[] = [];
  materialResource: Resource[] = [];

  constructor(public activeModal: NgbActiveModal,
              qualityIndicatorMaterialLinkService: QualityIndicatorMaterialLinkService, qualityIndicatorService: QualityIndicatorService,
              resourceService1: ResourceService,
              private fb: FormBuilder) {
    this.qualityIndicatorMaterialLinkService = qualityIndicatorMaterialLinkService;
    this.resourceService = resourceService1;
    this.qualityIndicatorService = qualityIndicatorService;
  }

  editForm = this.fb.group({
    id: [null],
    materialResourceId: [null, [Validators.required]],
    qualityIndicatorId: [null, [Validators.required]],
    insTime: [null],
    updTime: [null],
  });


  trackById(index: number, item: Resource): any {
    return item.id;
  }

  trackByIdType(index: number, item: QualityIndicator): any {
    return item.id;
  }


  ngOnInit(): void {

  }

  loadDirectories(): void {
    this.qualityIndicatorService.findAllList().subscribe(res => {
      this.qualityIndicators = res.body;
    });
    this.resourceService.findAllList().subscribe(res => {
      this.materialResource = res.body;
    });
  }

  init(): void {
    this.editForm.patchValue({
      id: this.qualityIndicatorMaterialLink.id,
      materialResourceId: this.qualityIndicatorMaterialLink.materialResourceId,
      qualityIndicatorId: this.qualityIndicatorMaterialLink.qualityIndicatorId,
      insTime: this.qualityIndicatorMaterialLink.insTime != null ?
        moment(this.qualityIndicatorMaterialLink.insTime).format(DATE_TIME_FORMAT) : null,
      updTime: this.qualityIndicatorMaterialLink.insTime != null ?
        moment(this.qualityIndicatorMaterialLink.updTime).format(DATE_TIME_FORMAT) : null,
    });
  }

  clear(): void {
    this.activeModal.close();
  }

  save(): void {
    this.isSaving = true;
    const resourceRes = this.update();
    if (!resourceRes.id) {
      this.qualityIndicatorMaterialLinkService.save(resourceRes).subscribe(res => {
          this.saveResult(res);
        }, error => {
          this.errorMessage = 'ошибка сохранения ' + error;
        }
      );
    } else {
      this.qualityIndicatorMaterialLinkService.update(resourceRes).subscribe(res => {
          this.saveResult(res);
        }, error => {
          this.errorMessage = 'ошибка сохранения ' + error;
        }
      );
    }
  }


  update(): QualityIndicatorMaterialLink {
    return {
      ...new QualityIndicatorMaterialLink(),
      id: this.editForm.get(['id']).value ? this.editForm.get(['id']).value : null,
      materialResourceId: this.editForm.get(['materialResourceId']).value,
      qualityIndicatorId: this.editForm.get(['qualityIndicatorId']).value,
    };
  }


  private saveResult(res: HttpResponse<Resource>): void {
    this.isSaving = false;
    if (res.body && res.body.id != null) {
      this.activeModal.close({
        update: true
      });
    }
  }

  closeError(): void {
    this.errorMessage = undefined;
  }
}
