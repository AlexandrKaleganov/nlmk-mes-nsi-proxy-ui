import {Component, OnInit} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {FormBuilder, Validators} from '@angular/forms';
import * as moment from 'moment';
import {DATE_TIME_FORMAT} from '../../../shared/constant/input.constant';
import {HttpResponse} from '@angular/common/http';
import {StructureCompanyMaterialLinkService} from '../structure-company-material-link.service';
import {Resource} from '../../../shared/models/resource.model';
import {Supplier} from '../../../shared/models/supplier.model';
import {MarkResource} from '../../../shared/models/mark-resource.class';
import {ResourceService} from '../../resource/resource.service';
import {TypeResourceService} from '../../type-resource/type-resource.service';
import {TypeResource} from '../../../shared/models/type-resource.model';
import {StructureCompanyMaterialLink} from '../../../shared/models/structure-company-material-link.model';
import {StructureCompanyService} from '../../structure-company/structure-company.service';

@Component({
  selector: 'app-edit-structure-company-material-link',
  templateUrl: './edit-structure-company-material-link.component.html',
  styleUrls: ['./edit-structure-company-material-link.component.css']
})
export class EditStructureCompanyMaterialLinkComponent implements OnInit {
  structureCompanyMaterialLink: StructureCompanyMaterialLink = new StructureCompanyMaterialLink();
  isSaving = false;
  structureCompanyMaterialLinkService: StructureCompanyMaterialLinkService;
  errorMessage: string | undefined;
  resourceService: ResourceService;
  structureCompanyService: StructureCompanyService;
  structureCompanyMaterialLinks: StructureCompanyMaterialLink[] = [];
  materialResource: Resource[] = [];

  constructor(public activeModal: NgbActiveModal, structureCompanyMaterialLinkService: StructureCompanyMaterialLinkService,
              structureCompanyService1: StructureCompanyService,
              resourceService1: ResourceService,
              private fb: FormBuilder) {
    this.structureCompanyMaterialLinkService = structureCompanyMaterialLinkService;
    this.resourceService = resourceService1;
    this.structureCompanyService = structureCompanyService1;
  }

  editForm = this.fb.group({
    id: [null],
    materialResourceId: [null, [Validators.required]],
    structureCompanyId: [null, [Validators.required]],
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
    this.structureCompanyService.findAllList().subscribe(res => {
      this.structureCompanyMaterialLinks = res.body;
    });
    this.resourceService.findAllList().subscribe(res => {
      this.materialResource = res.body;
    });
  }

  init(): void {
    this.editForm.patchValue({
      id: this.structureCompanyMaterialLink.id,
      materialResourceId: this.structureCompanyMaterialLink.materialResourceId,
      structureCompanyId: this.structureCompanyMaterialLink.structureCompanyId,
      insTime: this.structureCompanyMaterialLink.insTime != null ? moment(this.structureCompanyMaterialLink.insTime)
        .format(DATE_TIME_FORMAT) : null,
      updTime: this.structureCompanyMaterialLink.insTime != null ? moment(this.structureCompanyMaterialLink.updTime)
        .format(DATE_TIME_FORMAT) : null,
    });
  }

  clear(): void {
    this.activeModal.close();
  }

  save(): void {
    this.isSaving = true;
    const resourceRes = this.update();
    if (!resourceRes.id) {
      this.structureCompanyMaterialLinkService.save(resourceRes).subscribe(res => {
          this.saveResult(res);
        }, error => {
          this.errorMessage = 'ошибка сохранения ' + error;
        }
      );
    } else {
      this.structureCompanyMaterialLinkService.update(resourceRes).subscribe(res => {
          this.saveResult(res);
        }, error => {
          this.errorMessage = 'ошибка сохранения ' + error;
        }
      );
    }
  }


  update(): StructureCompanyMaterialLink {
    return {
      ...new StructureCompanyMaterialLink(),
      id: this.editForm.get(['id']).value ? this.editForm.get(['id']).value : null,
      materialResourceId: this.editForm.get(['materialResourceId']).value,
      structureCompanyId: this.editForm.get(['structureCompanyId']).value,
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
