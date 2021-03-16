import { Component, OnInit } from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {FormBuilder, Validators} from '@angular/forms';
import * as moment from 'moment';
import {DATE_TIME_FORMAT} from '../../../shared/constant/input.constant';
import {HttpResponse} from '@angular/common/http';
import {MarkResource} from '../../../shared/models/mark-resource.class';
import {MarkResourceService} from '../mark-resource.service';

@Component({
  selector: 'app-edit-mark-resource',
  templateUrl: './edit-mark-resource.component.html',
  styleUrls: ['./edit-mark-resource.component.css']
})
export class EditMarkResourceComponent implements OnInit {
  markResource: MarkResource = new MarkResource();
  isSaving = false;
  markResourceService: MarkResourceService;
  errorMessage: string | undefined;

  constructor(public activeModal: NgbActiveModal, markResourceService: MarkResourceService,
              private fb: FormBuilder) {
    this.markResourceService = markResourceService;
  }

  editForm = this.fb.group({
    id: [null],
    name: [null, [Validators.required]],
    shortName: [null, [Validators.required]],
    code: [null, [Validators.required]],
    insTime: [null],
    updTime: [null],
  });

  ngOnInit(): void {

  }

  init(): void {
    this.editForm.patchValue({
      id: this.markResource.id,
      name: this.markResource.name,
      shortName: this.markResource.shortName,
      code: this.markResource.code,
      insTime: this.markResource.insTime != null ?  moment(this.markResource.insTime).format(DATE_TIME_FORMAT) : null,
      updTime: this.markResource.insTime != null ?  moment(this.markResource.updTime).format(DATE_TIME_FORMAT) : null,
    });
  }

  clear(): void {
    this.activeModal.close();
  }

  save(): void {
    this.isSaving = true;
    const MarkResourceRes = this.update();
    if (!MarkResourceRes.id) {
      this.markResourceService.save(MarkResourceRes).subscribe(res => {
          this.saveResult(res);
        }, error => {
          this.errorMessage = 'ошибка сохранения ' + error;
        }
      );
    } else {
      this.markResourceService.update(MarkResourceRes).subscribe(res => {
          this.saveResult(res);
        }, error => {
          this.errorMessage = 'ошибка сохранения ' + error;
        }
      );
    }
  }


  update(): MarkResource {
    return {
      ...new MarkResource(),
      id: this.editForm.get(['id']).value ? this.editForm.get(['id']).value : null,
      name: this.editForm.get(['name']).value,
      shortName: this.editForm.get(['shortName']).value,
      code: this.editForm.get(['code']).value,
    };
  }


  private saveResult(res: HttpResponse<MarkResource>): void {
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
