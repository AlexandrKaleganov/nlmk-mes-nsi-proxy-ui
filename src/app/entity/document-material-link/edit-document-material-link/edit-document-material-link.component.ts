import {Component, OnInit} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {FormBuilder, Validators} from '@angular/forms';
import * as moment from 'moment';
import {DATE_TIME_FORMAT} from '../../../shared/constant/input.constant';
import {HttpResponse} from '@angular/common/http';
import {DocumentMaterialLinkService} from '../document-material-link.service';
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
import {RegulatoryDocumentService} from '../../regulatory-document/regulatory-document.service';
import {RegulatoryDocument} from '../../../shared/models/regulatory-document.model';
import {DocumentMaterialLink} from '../../../shared/models/document-material-link.model';

@Component({
  selector: 'app-edit-document-material-link',
  templateUrl: './edit-document-material-link.component.html',
  styleUrls: ['./edit-document-material-link.component.css']
})
export class EditDocumentMaterialLinkComponent implements OnInit {
  documentMaterialLink: DocumentMaterialLink = new DocumentMaterialLink();
  isSaving = false;
  documentMaterialLinkService: DocumentMaterialLinkService;
  errorMessage: string | undefined;
  resourceService: ResourceService;
  regulatoryDocumentService: RegulatoryDocumentService;
  regulatoryDocuments: RegulatoryDocument[] = [];
  materialResource: Resource[] = [];

  constructor(public activeModal: NgbActiveModal, documentMaterialLinkService: DocumentMaterialLinkService,
              regulatoryDocumentService1: RegulatoryDocumentService,
              resourceService1: ResourceService,
              private fb: FormBuilder) {
    this.documentMaterialLinkService = documentMaterialLinkService;
    this.resourceService = resourceService1;
    this.regulatoryDocumentService = regulatoryDocumentService1;
  }

  editForm = this.fb.group({
    id: [null],
    materialResourceId: [null, [Validators.required]],
    regulatoryDocumentId: [null, [Validators.required]],
    qualityDeviationCheck: [true],
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
    this.regulatoryDocumentService.findAllList().subscribe(res => {
      this.regulatoryDocuments = res.body;
    });
    this.resourceService.findAllList().subscribe(res => {
      this.materialResource = res.body;
    });
  }

  init(): void {
    this.editForm.patchValue({
      id: this.documentMaterialLink.id,
      materialResourceId: this.documentMaterialLink.materialResourceId,
      regulatoryDocumentId: this.documentMaterialLink.regulatoryDocumentId,
      qualityDeviationCheck: this.documentMaterialLink.qualityDeviationCheck,
      insTime: this.documentMaterialLink.insTime != null ? moment(this.documentMaterialLink.insTime).format(DATE_TIME_FORMAT) : null,
      updTime: this.documentMaterialLink.insTime != null ? moment(this.documentMaterialLink.updTime).format(DATE_TIME_FORMAT) : null,
    });
  }

  clear(): void {
    this.activeModal.close();
  }

  save(): void {
    this.isSaving = true;
    const resourceRes = this.update();
    if (!resourceRes.id) {
      this.documentMaterialLinkService.save(resourceRes).subscribe(res => {
          this.saveResult(res);
        }, error => {
          this.errorMessage = 'ошибка сохранения ' + error;
        }
      );
    } else {
      this.documentMaterialLinkService.update(resourceRes).subscribe(res => {
          this.saveResult(res);
        }, error => {
          this.errorMessage = 'ошибка сохранения ' + error;
        }
      );
    }
  }


  update(): DocumentMaterialLink {
    return {
      ...new DocumentMaterialLink(),
      id: this.editForm.get(['id']).value ? this.editForm.get(['id']).value : null,
      materialResourceId: this.editForm.get(['materialResourceId']).value,
      qualityDeviationCheck: this.editForm.get(['qualityDeviationCheck']).value,
      regulatoryDocumentId: this.editForm.get(['regulatoryDocumentId']).value,
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
