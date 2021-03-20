import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {EventManagerService} from '../../../shared/service/event-manager.service';
import {RegulatoryDocumentService} from '../regulatory-document.service';
import {HttpResponse} from '@angular/common/http';
import {DATE_FORMAT, DATE_TIME_FORMAT} from '../../../shared/constant/input.constant';
import * as moment from 'moment';
import {Supplier} from '../../../shared/models/supplier.model';
import {RegulatoryDocument} from '../../../shared/models/regulatory-document.model';

@Component({
  selector: 'app-edit-regulatory-document',
  templateUrl: './edit-regulatory-document.component.html',
  styleUrls: ['./edit-regulatory-document.component.css']
})
export class EditRegulatoryDocumentComponent implements OnInit {
  regulatoryDocument: RegulatoryDocument = new RegulatoryDocument();
  isSaving = false;
  regulatoryDocumentService: RegulatoryDocumentService;
  errorMessage: string | undefined;

  constructor(public activeModal: NgbActiveModal, regulatoryDocumentService: RegulatoryDocumentService,
              private fb: FormBuilder) {
    this.regulatoryDocumentService = regulatoryDocumentService;
  }

  editForm = this.fb.group({
    id: [null],
    name: [null, [Validators.required]],
    shortName: [null, [Validators.required]],
    code: [null, [Validators.required]],
    isActive: [true, [Validators.required]],
    startDate: [null, [Validators.required]],
    endDate: [null, [Validators.required]],
    insTime: [null],
    updTime: [null],
  });

  ngOnInit(): void {

  }

  init(): void {
    this.editForm.patchValue({
      id: this.regulatoryDocument.id,
      name: this.regulatoryDocument.name,
      shortName: this.regulatoryDocument.shortName,
      code: this.regulatoryDocument.code,
      isActive: this.regulatoryDocument.isActive,
      insTime: this.regulatoryDocument.insTime != null ?  moment(this.regulatoryDocument.insTime).format(DATE_TIME_FORMAT) : null,
      updTime: this.regulatoryDocument.insTime != null ?  moment(this.regulatoryDocument.updTime).format(DATE_TIME_FORMAT) : null,
      startDate: this.regulatoryDocument.startDate != null ?  moment(this.regulatoryDocument.startDate).format(DATE_FORMAT) : null,
      endDate: this.regulatoryDocument.endDate != null ?  moment(this.regulatoryDocument.endDate).format(DATE_FORMAT) : null,
    });
  }

  clear(): void {
    this.activeModal.close();
  }

  save(): void {
    this.isSaving = true;
    const regulatoryDocument1 = this.update();
    if (!regulatoryDocument1.id) {
      this.regulatoryDocumentService.save(regulatoryDocument1).subscribe(res => {
          this.saveResult(res);
        }, error => {
        this.errorMessage = 'ошибка сохранения ' + error;
        }
      );
    } else {
      this.regulatoryDocumentService.update(regulatoryDocument1).subscribe(res => {
          this.saveResult(res);
        }, error => {
          this.errorMessage = 'ошибка сохранения ' + error;
        }
      );
    }
  }


  update(): RegulatoryDocument {
    return {
      ...new RegulatoryDocument(),
      id: this.editForm.get(['id']).value ? this.editForm.get(['id']).value : null,
      name: this.editForm.get(['name']).value,
      shortName: this.editForm.get(['shortName']).value,
      code: this.editForm.get(['code']).value,
      isActive: this.editForm.get(['isActive']).value,
      startDate: this.editForm.get(['startDate']).value,
      endDate: this.editForm.get(['endDate']).value,
    };
  }


  private saveResult(res: HttpResponse<RegulatoryDocument>): void {
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
