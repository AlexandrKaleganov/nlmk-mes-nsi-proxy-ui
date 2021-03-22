import {Component, OnInit} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {FormBuilder, Validators} from '@angular/forms';
import * as moment from 'moment';
import {DATE_TIME_FORMAT} from '../../../shared/constant/input.constant';
import {HttpResponse} from '@angular/common/http';
import {ReferenceValueService} from '../reference-value.service';
import {Supplier} from '../../../shared/models/supplier.model';
import {MarkResource} from '../../../shared/models/mark-resource.class';
import {ReferenceValue} from '../../../shared/models/reference-value.model';
import {QualityIndicatorService} from '../../quality-indicator/quality-indicator.service';
import {RegulatoryDocumentService} from '../../regulatory-document/regulatory-document.service';
import {QualityIndicator} from '../../../shared/models/quality-indicator.model';
import {RegulatoryDocument} from '../../../shared/models/regulatory-document.model';

@Component({
  selector: 'app-edit-reference-value',
  templateUrl: './edit-reference-value.component.html',
  styleUrls: ['./edit-reference-value.component.css']
})
export class EditReferenceValueComponent implements OnInit {
  referenceValue: ReferenceValue = new ReferenceValue();
  isSaving = false;
  referenceValueService: ReferenceValueService;
  errorMessage: string | undefined;
  qualityIndicatorService: QualityIndicatorService;
  regulatoryDocumentService: RegulatoryDocumentService;
  regulatoryDocuments: RegulatoryDocument[] = [];
  qualityIndicators: QualityIndicator[] = [];

  constructor(public activeModal: NgbActiveModal, referenceValueService1: ReferenceValueService,
              qualityIndicatorService1: QualityIndicatorService, regulatoryDocumentService1: RegulatoryDocumentService,
              private fb: FormBuilder) {
    this.referenceValueService = referenceValueService1;
    this.qualityIndicatorService = qualityIndicatorService1;
    this.regulatoryDocumentService = regulatoryDocumentService1;
  }

  editForm = this.fb.group({
    id: [null],
    qualityIndicatorId: [null, [Validators.required]],
    regulatoryDocumentId: [null, [Validators.required]],
    valueMax: [null],
    valueMin: [null],
    valueTolerance: [null],
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

  loadDirectories(): void {
    this.regulatoryDocumentService.findAllList().subscribe(res => {
      this.regulatoryDocuments = res.body;
    });
    this.qualityIndicatorService.findAllList().subscribe(res => {
      this.qualityIndicators = res.body;
    });
  }

  init(): void {
    this.editForm.patchValue({
      id: this.referenceValue.id,
      qualityIndicatorId: this.referenceValue.qualityIndicatorId,
      regulatoryDocumentId: this.referenceValue.regulatoryDocumentId,
      valueMax: this.referenceValue.valueMax,
      valueMin: this.referenceValue.valueMin,
      valueTolerance: this.referenceValue.valueTolerance,
      insTime: this.referenceValue.insTime != null ? moment(this.referenceValue.insTime).format(DATE_TIME_FORMAT) : null,
      updTime: this.referenceValue.insTime != null ? moment(this.referenceValue.updTime).format(DATE_TIME_FORMAT) : null,
    });
  }

  clear(): void {
    this.activeModal.close();
  }

  save(): void {
    this.isSaving = true;
    const resourceRes = this.update();
    if (!resourceRes.id) {
      this.referenceValueService.save(resourceRes).subscribe(res => {
          this.saveResult(res);
        }, error => {
          this.errorMessage = 'ошибка сохранения ' + error;
        }
      );
    } else {
      this.referenceValueService.update(resourceRes).subscribe(res => {
          this.saveResult(res);
        }, error => {
          this.errorMessage = 'ошибка сохранения ' + error;
        }
      );
    }
  }


  update(): ReferenceValue {
    return {
      ...new ReferenceValue(),
      id: this.editForm.get(['id']).value ? this.editForm.get(['id']).value : null,
      qualityIndicatorId: this.editForm.get(['qualityIndicatorId']).value,
      regulatoryDocumentId: this.editForm.get(['regulatoryDocumentId']).value,
      valueMax: this.editForm.get(['valueMax']).value,
      valueMin: this.editForm.get(['valueMin']).value,
      valueTolerance: this.editForm.get(['valueTolerance']).value,
    };
  }


  private saveResult(res: HttpResponse<ReferenceValue>): void {
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
