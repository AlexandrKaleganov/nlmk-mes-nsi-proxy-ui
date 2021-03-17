import {Component, OnInit} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {FormBuilder, Validators} from '@angular/forms';
import * as moment from 'moment';
import {DATE_TIME_FORMAT} from '../../../shared/constant/input.constant';
import {HttpResponse} from '@angular/common/http';
import {TypeMaterialLinkService} from '../type-material-link.service';
import {Resource} from '../../../shared/models/resource.model';
import {Supplier} from '../../../shared/models/supplier.model';
import {MarkResource} from '../../../shared/models/mark-resource.class';
import {MarkResourceService} from '../../mark-resource/mark-resource.service';
import {SupplierService} from '../../supplier/supplier.service';
import {TypeMaterialLink} from '../../../shared/models/type-material-link.model';
import {ResourceService} from '../../resource/resource.service';
import {TypeResourceService} from '../../type-resource/type-resource.service';
import {TypeResource} from '../../../shared/models/type-resource.model';

@Component({
  selector: 'app-edit-type-material-link',
  templateUrl: './edit-type-material-link.component.html',
  styleUrls: ['./edit-type-material-link.component.css']
})
export class EditTypeMaterialLinkComponent implements OnInit {
  typeMaterialLink: TypeMaterialLink = new TypeMaterialLink();
  isSaving = false;
  typeMaterialLinkService: TypeMaterialLinkService;
  errorMessage: string | undefined;
  resourceService: ResourceService;
  typeResourceService: TypeResourceService;
  materialResourceTypeList: TypeResource[] = [];
  materialResource: Resource[] = [];

  constructor(public activeModal: NgbActiveModal, resourceService: TypeMaterialLinkService, typeResourceService1: TypeResourceService,
              resourceService1: ResourceService,
              private fb: FormBuilder) {
    this.typeMaterialLinkService = resourceService;
    this.resourceService = resourceService1;
    this.typeResourceService = typeResourceService1;
  }

  editForm = this.fb.group({
    id: [null],
    materialResourceId: [null, [Validators.required]],
    materialResourceTypeId: [null, [Validators.required]],
    insTime: [null],
    updTime: [null],
  });


  trackById(index: number, item: Supplier): any {
    return item.id;
  }

  trackByIdType(index: number, item: MarkResource): any {
    return item.id;
  }


  ngOnInit(): void {

  }

  loadDirectories(): void {
    this.typeResourceService.findAllList().subscribe(res => {
      this.materialResourceTypeList = res.body;
    });
    this.resourceService.findAllList().subscribe(res => {
      this.materialResource = res.body;
    });
  }

  init(): void {
    this.editForm.patchValue({
      id: this.typeMaterialLink.id,
      materialResourceId: this.typeMaterialLink.materialResourceId,
      materialResourceTypeId: this.typeMaterialLink.materialResourceTypeId,
      insTime: this.typeMaterialLink.insTime != null ? moment(this.typeMaterialLink.insTime).format(DATE_TIME_FORMAT) : null,
      updTime: this.typeMaterialLink.insTime != null ? moment(this.typeMaterialLink.updTime).format(DATE_TIME_FORMAT) : null,
    });
  }

  clear(): void {
    this.activeModal.close();
  }

  save(): void {
    this.isSaving = true;
    const resourceRes = this.update();
    if (!resourceRes.id) {
      this.typeMaterialLinkService.save(resourceRes).subscribe(res => {
          this.saveResult(res);
        }, error => {
          this.errorMessage = 'ошибка сохранения ' + error;
        }
      );
    } else {
      this.typeMaterialLinkService.update(resourceRes).subscribe(res => {
          this.saveResult(res);
        }, error => {
          this.errorMessage = 'ошибка сохранения ' + error;
        }
      );
    }
  }


  update(): TypeMaterialLink {
    return {
      ...new TypeMaterialLink(),
      id: this.editForm.get(['id']).value ? this.editForm.get(['id']).value : null,
      materialResourceId: this.editForm.get(['materialResourceId']).value,
      materialResourceTypeId: this.editForm.get(['materialResourceTypeId']).value,
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
