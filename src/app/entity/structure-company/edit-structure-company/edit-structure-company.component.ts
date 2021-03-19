import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {StructureCompanyService} from '../structure-company.service';
import {HttpResponse} from '@angular/common/http';
import {DATE_TIME_FORMAT} from '../../../shared/constant/input.constant';
import * as moment from 'moment';
import {StructureCompany} from '../../../shared/models/structure-company';

@Component({
  selector: 'app-edit-structure-company',
  templateUrl: './edit-structure-company.component.html',
  styleUrls: ['./edit-structure-company.component.css']
})
export class EditStructureCompanyComponent implements OnInit {
  structureCompany: StructureCompany = new StructureCompany();
  isSaving = false;
  structureCompanyService1: StructureCompanyService;
  errorMessage: string | undefined;
  parentList: StructureCompany[] = [];

  constructor(public activeModal: NgbActiveModal, structureCompanyService: StructureCompanyService,
              private fb: FormBuilder) {
    this.structureCompanyService1 = structureCompanyService;
  }

  editForm = this.fb.group({
    id: [null],
    name: [null, [Validators.required]],
    code: [null, [Validators.required]],
    parentId: [null],
    insTime: [null],
    updTime: [null],
  });

  trackById(index: number, item: StructureCompany): any {
    return item.id;
  }


  ngOnInit(): void {

  }

  init(): void {
    this.editForm.patchValue({
      id: this.structureCompany.id,
      name: this.structureCompany.name,
      code: this.structureCompany.code,
      parentId: this.structureCompany.parentId,
      insTime: this.structureCompany.insTime != null ? moment(this.structureCompany.insTime).format(DATE_TIME_FORMAT) : null,
      updTime: this.structureCompany.insTime != null ? moment(this.structureCompany.updTime).format(DATE_TIME_FORMAT) : null,
    });
  }

  clear(): void {
    this.activeModal.close();
  }

  loaDirectories(): void {
    this.structureCompanyService1.findAllList()
      .subscribe(res => this.parentList = res.body);
  }

  save(): void {
    this.isSaving = true;
    const structureCompany1 = this.update();
    if (!structureCompany1.id) {
      this.structureCompanyService1.save(structureCompany1).subscribe(res => {
          this.saveResult(res);
        }, error => {
          this.errorMessage = 'ошибка сохранения ' + error;
        }
      );
    } else {
      this.structureCompanyService1.update(structureCompany1).subscribe(res => {
          this.saveResult(res);
        }, error => {
          this.errorMessage = 'ошибка сохранения ' + error;
        }
      );
    }
  }


  update(): StructureCompany {
    return {
      ...new StructureCompany(),
      id: this.editForm.get(['id']).value ? this.editForm.get(['id']).value : null,
      name: this.editForm.get(['name']).value,
      code: this.editForm.get(['code']).value,
      // @ts-ignore
      parentId: this.editForm.get(['parentId']),
    };
  }


  private saveResult(res: HttpResponse<StructureCompany>): void {
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
