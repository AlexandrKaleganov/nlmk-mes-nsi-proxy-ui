import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {EventManagerService} from '../../../shared/service/event-manager.service';
import {SupplierService} from '../supplier.service';
import {HttpResponse} from '@angular/common/http';
import {DATE_TIME_FORMAT} from '../../../shared/constant/input.constant';
import * as moment from 'moment';
import {Supplier} from '../../../shared/models/supplier.model';

@Component({
  selector: 'app-edit-supplier',
  templateUrl: './edit-supplier.component.html',
  styleUrls: ['./edit-supplier.component.css']
})
export class EditSupplierComponent implements OnInit {
  supplier: Supplier = new Supplier();
  isSaving = false;
  supplierService: SupplierService;
  errorMessage: string | undefined;

  constructor(public activeModal: NgbActiveModal, supplierService: SupplierService,
              private fb: FormBuilder) {
    this.supplierService = supplierService;
  }

  editForm = this.fb.group({
    id: [null],
    name: [null, [Validators.required]],
    code: [null, [Validators.required]],
    insTime: [null],
    updTime: [null],
  });

  ngOnInit(): void {

  }

  init(): void {
    this.editForm.patchValue({
      id: this.supplier.id,
      name: this.supplier.name,
      code: this.supplier.code,
      insTime: this.supplier.insTime != null ?  moment(this.supplier.insTime).format(DATE_TIME_FORMAT) : null,
      updTime: this.supplier.insTime != null ?  moment(this.supplier.updTime).format(DATE_TIME_FORMAT) : null,
    });
  }

  clear(): void {
    this.activeModal.close();
  }

  save(): void {
    this.isSaving = true;
    const supplierRes = this.update();
    if (!supplierRes.id) {
      this.supplierService.save(supplierRes).subscribe(res => {
          this.saveResult(res);
        }, error => {
        this.errorMessage = 'ошибка сохранения ' + error;
        }
      );
    } else {
      this.supplierService.update(supplierRes).subscribe(res => {
          this.saveResult(res);
        }, error => {
          this.errorMessage = 'ошибка сохранения ' + error;
        }
      );
    }
  }


  update(): Supplier {
    return {
      ...new Supplier(),
      id: this.editForm.get(['id']).value ? this.editForm.get(['id']).value : null,
      name: this.editForm.get(['name']).value,
      code: this.editForm.get(['code']).value,
    };
  }


  private saveResult(res: HttpResponse<Supplier>): void {
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
