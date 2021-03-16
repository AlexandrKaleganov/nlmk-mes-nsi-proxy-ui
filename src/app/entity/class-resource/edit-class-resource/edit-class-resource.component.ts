import { Component, OnInit } from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {FormBuilder, Validators} from '@angular/forms';
import * as moment from 'moment';
import {DATE_TIME_FORMAT} from '../../../shared/constant/input.constant';
import {HttpResponse} from '@angular/common/http';
import {ClassResourceService} from '../class-resource.service';
import {ClassResource} from '../../../shared/models/class-resource.model';

@Component({
  selector: 'app-edit-class-resource',
  templateUrl: './edit-class-resource.component.html',
  styleUrls: ['./edit-class-resource.component.css']
})
export class EditClassResourceComponent implements OnInit {
  classResource: ClassResource = new ClassResource();
  isSaving = false;
  classResourceService: ClassResourceService;
  errorMessage: string | undefined;

  constructor(public activeModal: NgbActiveModal, classResourceService: ClassResourceService,
              private fb: FormBuilder) {
    this.classResourceService = classResourceService;
  }

  editForm = this.fb.group({
    id: [null],
    name: [null, [Validators.required]],
    shortName: [null, [Validators.required]],
    sapId: [null],
    code: [null, [Validators.required]],
    insTime: [null],
    updTime: [null],
  });

  ngOnInit(): void {

  }

  init(): void {
    this.editForm.patchValue({
      id: this.classResource.id,
      name: this.classResource.name,
      shortName: this.classResource.shortName,
      sapId: this.classResource.sapId,
      code: this.classResource.code,
      insTime: this.classResource.insTime != null ?  moment(this.classResource.insTime).format(DATE_TIME_FORMAT) : null,
      updTime: this.classResource.insTime != null ?  moment(this.classResource.updTime).format(DATE_TIME_FORMAT) : null,
    });
  }

  clear(): void {
    this.activeModal.close();
  }

  save(): void {
    this.isSaving = true;
    const classResource1 = this.update();
    if (!classResource1.id) {
      this.classResourceService.save(classResource1).subscribe(res => {
          this.saveResult(res);
        }, error => {
          this.errorMessage = 'ошибка сохранения ' + error;
        }
      );
    } else {
      this.classResourceService.update(classResource1).subscribe(res => {
          this.saveResult(res);
        }, error => {
          this.errorMessage = 'ошибка сохранения ' + error;
        }
      );
    }
  }

  update(): ClassResource {
    return {
      ...new ClassResource(),
      id: this.editForm.get(['id']).value ? this.editForm.get(['id']).value : null,
      name: this.editForm.get(['name']).value,
      shortName: this.editForm.get(['shortName']).value,
      sapId: this.editForm.get(['sapId']).value,
      code: this.editForm.get(['code']).value,
    };
  }


  private saveResult(res: HttpResponse<ClassResource>): void {
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
