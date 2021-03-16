import { Component, OnInit } from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {FormBuilder, Validators} from '@angular/forms';
import * as moment from 'moment';
import {DATE_TIME_FORMAT} from '../../../shared/constant/input.constant';
import {HttpResponse} from '@angular/common/http';
import {TypeResourceService} from '../type-resource.service';
import {TypeResource} from '../../../shared/models/type-resource.model';

@Component({
  selector: 'app-edit-type-resource',
  templateUrl: './edit-type-resource.component.html',
  styleUrls: ['./edit-type-resource.component.css']
})
export class EditTypeResourceComponent implements OnInit {
  typeResource: TypeResource = new TypeResource();
  isSaving = false;
  typeResourceService: TypeResourceService;
  errorMessage: string | undefined;

  constructor(public activeModal: NgbActiveModal, typeResourceService1: TypeResourceService,
              private fb: FormBuilder) {
    this.typeResourceService = typeResourceService1;
  }

  editForm = this.fb.group({
    id: [null],
    name: [null, [Validators.required]],
    sapId: [null],
    code: [null, [Validators.required]],
    insTime: [null],
    updTime: [null],
  });

  ngOnInit(): void {

  }

  init(): void {
    this.editForm.patchValue({
      id: this.typeResource.id,
      name: this.typeResource.name,
      sapId: this.typeResource.sapId,
      code: this.typeResource.code,
      insTime: this.typeResource.insTime != null ?  moment(this.typeResource.insTime).format(DATE_TIME_FORMAT) : null,
      updTime: this.typeResource.insTime != null ?  moment(this.typeResource.updTime).format(DATE_TIME_FORMAT) : null,
    });
  }

  clear(): void {
    this.activeModal.close();
  }

  save(): void {
    this.isSaving = true;
    const typeResource1 = this.update();
    if (!typeResource1.id) {
      this.typeResourceService.save(typeResource1).subscribe(res => {
          this.saveResult(res);
        }, error => {
          this.errorMessage = 'ошибка сохранения ' + error;
        }
      );
    } else {
      this.typeResourceService.update(typeResource1).subscribe(res => {
          this.saveResult(res);
        }, error => {
          this.errorMessage = 'ошибка сохранения ' + error;
        }
      );
    }
  }


  update(): TypeResource {
    return {
      ...new TypeResource(),
      id: this.editForm.get(['id']).value ? this.editForm.get(['id']).value : null,
      name: this.editForm.get(['name']).value,
      sapId: this.editForm.get(['sapId']).value,
      code: this.editForm.get(['code']).value,
    };
  }


  private saveResult(res: HttpResponse<TypeResource>): void {
    this.isSaving = false;
    console.error(res.body.id);
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
