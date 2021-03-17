import {Component, OnInit} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {FormBuilder, Validators} from '@angular/forms';
import * as moment from 'moment';
import {DATE_TIME_FORMAT} from '../../../shared/constant/input.constant';
import {HttpResponse} from '@angular/common/http';
import {ClassMaterialLinkService} from '../class-material-link.service';
import {Resource} from '../../../shared/models/resource.model';
import {Supplier} from '../../../shared/models/supplier.model';
import {MarkResource} from '../../../shared/models/mark-resource.class';
import {MarkResourceService} from '../../mark-resource/mark-resource.service';
import {SupplierService} from '../../supplier/supplier.service';
import {TypeMaterialLink} from '../../../shared/models/type-material-link.model';
import {ResourceService} from '../../resource/resource.service';
import {TypeResourceService} from '../../type-resource/type-resource.service';
import {TypeResource} from '../../../shared/models/type-resource.model';
import {ClassResource} from '../../../shared/models/class-resource.model';
import {ClassMaterialLink} from '../../../shared/models/class-material-link.model';
import {ClassResourceService} from '../../class-resource/class-resource.service';

@Component({
  selector: 'app-edit-class-material-link',
  templateUrl: './edit-class-material-link.component.html',
  styleUrls: ['./edit-class-material-link.component.css']
})
export class EditClassMaterialLinkComponent implements OnInit {
  classMaterialLink: ClassMaterialLink = new ClassMaterialLink();
  isSaving = false;
  classMaterialLinkService: ClassMaterialLinkService;
  errorMessage: string | undefined;
  resourceService: ResourceService;
  classResourceService: ClassResourceService;
  classResources: ClassResource[] = [];
  materialResource: Resource[] = [];

  constructor(public activeModal: NgbActiveModal, resourceService: ClassMaterialLinkService, classResourceService: ClassResourceService,
              resourceService1: ResourceService,
              private fb: FormBuilder) {
    this.classMaterialLinkService = resourceService;
    this.resourceService = resourceService1;
    this.classResourceService = classResourceService;
  }

  editForm = this.fb.group({
    id: [null],
    materialResourceId: [null, [Validators.required]],
    materialResourceClassId: [null, [Validators.required]],
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
    this.classResourceService.findAllList().subscribe(res => {
      this.classResources = res.body;
    });
    this.resourceService.findAllList().subscribe(res => {
      this.materialResource = res.body;
    });
  }

  init(): void {
    this.editForm.patchValue({
      id: this.classMaterialLink.id,
      materialResourceId: this.classMaterialLink.materialResourceId,
      materialResourceClassId: this.classMaterialLink.materialResourceClassId,
      insTime: this.classMaterialLink.insTime != null ? moment(this.classMaterialLink.insTime).format(DATE_TIME_FORMAT) : null,
      updTime: this.classMaterialLink.insTime != null ? moment(this.classMaterialLink.updTime).format(DATE_TIME_FORMAT) : null,
    });
  }

  clear(): void {
    this.activeModal.close();
  }

  save(): void {
    this.isSaving = true;
    const resourceRes = this.update();
    if (!resourceRes.id) {
      this.classMaterialLinkService.save(resourceRes).subscribe(res => {
          this.saveResult(res);
        }, error => {
          this.errorMessage = 'ошибка сохранения ' + error;
        }
      );
    } else {
      this.classMaterialLinkService.update(resourceRes).subscribe(res => {
          this.saveResult(res);
        }, error => {
          this.errorMessage = 'ошибка сохранения ' + error;
        }
      );
    }
  }


  update(): ClassMaterialLink {
    return {
      ...new ClassMaterialLink(),
      id: this.editForm.get(['id']).value ? this.editForm.get(['id']).value : null,
      materialResourceId: this.editForm.get(['materialResourceId']).value,
      materialResourceClassId: this.editForm.get(['materialResourceClassId']).value,
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
