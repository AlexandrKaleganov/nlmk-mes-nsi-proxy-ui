import {Component, OnInit} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {FormBuilder, Validators} from '@angular/forms';
import * as moment from 'moment';
import {DATE_TIME_FORMAT} from '../../../shared/constant/input.constant';
import {HttpResponse} from '@angular/common/http';
import {QualityIndicatorService} from '../quality-indicator.service';
import {Resource} from '../../../shared/models/resource.model';
import {MarkResource} from '../../../shared/models/mark-resource.class';
import {QualityIndicator} from '../../../shared/models/quality-indicator.model';
import {Supplier} from '../../../shared/models/supplier.model';

@Component({
  selector: 'app-edit-quality-indicator',
  templateUrl: './edit-quality-indicator.component.html',
  styleUrls: ['./edit-quality-indicator.component.css']
})
export class EditQualityIndicatorComponent implements OnInit {
  qualityIndicator: QualityIndicator = new QualityIndicator();
  isSaving = false;
  qualityIndicatorService1: QualityIndicatorService;
  errorMessage: string | undefined;
  suppliers: Supplier[] = [];

  constructor(public activeModal: NgbActiveModal, qualityIndicatorService: QualityIndicatorService,
              private fb: FormBuilder) {
    this.qualityIndicatorService1 = qualityIndicatorService;
  }

  editForm = this.fb.group({
    id: [null],
    name: [null, [Validators.required]],
    shortName: [null, [Validators.required]],
    code: [null, [Validators.required]],
    qualityIndicatorType: [null, [Validators.required]],
    insTime: [null],
    updTime: [null],
  });


  trackById(index: number, item: Supplier): any {
    return item.id;
  }

  trackByIdMark(index: number, item: MarkResource): any {
    return item.id;
  }


  ngOnInit(): void {

  }

  init(): void {
    this.editForm.patchValue({
      id: this.qualityIndicator.id,
      name: this.qualityIndicator.name,
      shortName: this.qualityIndicator.shortName,
      code: this.qualityIndicator.code,
      qualityIndicatorType: this.qualityIndicator.qualityIndicatorType,
      insTime: this.qualityIndicator.insTime != null ? moment(this.qualityIndicator.insTime).format(DATE_TIME_FORMAT) : null,
      updTime: this.qualityIndicator.insTime != null ? moment(this.qualityIndicator.updTime).format(DATE_TIME_FORMAT) : null,
    });
  }

  clear(): void {
    this.activeModal.close();
  }

  save(): void {
    this.isSaving = true;
    const resourceRes = this.update();
    if (!resourceRes.id) {
      this.qualityIndicatorService1.save(resourceRes).subscribe(res => {
          this.saveResult(res);
        }, error => {
          this.errorMessage = 'ошибка сохранения ' + error;
        }
      );
    } else {
      this.qualityIndicatorService1.update(resourceRes).subscribe(res => {
          this.saveResult(res);
        }, error => {
          this.errorMessage = 'ошибка сохранения ' + error;
        }
      );
    }
  }


  update(): QualityIndicator {
    return {
      ...new QualityIndicator(),
      id: this.editForm.get(['id']).value ? this.editForm.get(['id']).value : null,
      name: this.editForm.get(['name']).value,
      shortName: this.editForm.get(['shortName']).value,
      qualityIndicatorType: this.editForm.get(['qualityIndicatorType']).value,
      code: this.editForm.get(['code']).value,
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
