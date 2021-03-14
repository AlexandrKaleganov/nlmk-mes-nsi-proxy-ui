import {Component, OnInit} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {FormBuilder, Validators} from '@angular/forms';
import * as moment from 'moment';
import {DATE_TIME_FORMAT} from '../../../shared/constant/input.constant';
import {HttpResponse} from '@angular/common/http';
import {ResourceService} from '../resource.service';
import {Resource} from '../../../shared/models/resource.model';
import {Supplier} from '../../../shared/models/supplier.model';
import {MarkResource} from '../../../shared/models/mark-resource.class';
import {MarkResourceService} from '../../mark-resource/mark-resource.service';
import {SupplierService} from '../../supplier/supplier.service';

@Component({
  selector: 'app-edit-resource',
  templateUrl: './edit-resource.component.html',
  styleUrls: ['./edit-resource.component.css']
})
export class EditResourceComponent implements OnInit {
  resource: Resource = new Resource();
  isSaving = false;
  resourceService: ResourceService;
  errorMessage: string | undefined;
  supplierService: SupplierService;
  markResourceService: MarkResourceService;
  materialResourceMarkList: MarkResource[] = [];
  suppliers: Supplier[] = [];

  constructor(public activeModal: NgbActiveModal, resourceService: ResourceService, markResourceService: MarkResourceService,
              supplierService: SupplierService,
              private fb: FormBuilder) {
    this.resourceService = resourceService;
    this.supplierService = supplierService;
    this.markResourceService = markResourceService;
  }

  editForm = this.fb.group({
    id: [null],
    name: [null, [Validators.required]],
    shortName: [null, [Validators.required]],
    code: [null, [Validators.required]],
    supplierId: [null, [Validators.required]],
    materialResourceMarkId: [null, [Validators.required]],
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
    this.markResourceService.findAllList().subscribe(res => {
      this.materialResourceMarkList = res.body;
    });
    this.supplierService.findAllList().subscribe(res => {
      this.suppliers = res.body;
    });
  }

  init(): void {
    this.editForm.patchValue({
      id: this.resource.id,
      name: this.resource.name,
      shortName: this.resource.shortName,
      code: this.resource.code,
      supplierId: this.resource.supplierId,
      materialResourceMarkId: this.resource.materialResourceMarkId,
      insTime: this.resource.insTime != null ? moment(this.resource.insTime).format(DATE_TIME_FORMAT) : null,
      updTime: this.resource.insTime != null ? moment(this.resource.updTime).format(DATE_TIME_FORMAT) : null,
    });
  }

  clear(): void {
    this.activeModal.close();
  }

  save(): void {
    this.isSaving = true;
    const resourceRes = this.update();
    if (!resourceRes.id) {
      this.resourceService.save(resourceRes).subscribe(res => {
          this.saveResult(res);
        }, error => {
          this.errorMessage = 'ошибка сохранения ' + error;
        }
      );
    } else {
      this.resourceService.update(resourceRes).subscribe(res => {
          this.saveResult(res);
        }, error => {
          this.errorMessage = 'ошибка сохранения ' + error;
        }
      );
    }
  }


  update(): Resource {
    return {
      ...new Resource(),
      id: this.editForm.get(['id']).value ? this.editForm.get(['id']).value : null,
      name: this.editForm.get(['name']).value,
      shortName: this.editForm.get(['shortName']).value,
      supplierId: this.editForm.get(['supplierId']).value,
      materialResourceMarkId: this.editForm.get(['materialResourceMarkId']).value,
      code: this.editForm.get(['code']).value,
    };
  }


  private saveResult(res: HttpResponse<Resource>): void {
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
