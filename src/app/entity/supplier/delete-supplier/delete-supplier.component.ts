import { Component, OnInit } from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {Supplier} from '../../../shared/models/supplier.model';
import {SupplierService} from '../supplier.service';
import {EventManagerService} from '../../../shared/service/event-manager.service';

@Component({
  selector: 'app-delete-supplier',
  templateUrl: './delete-supplier.component.html',
  styleUrls: ['./delete-supplier.component.css']
})
export class DeleteSupplierComponent implements OnInit {
  supplier?: Supplier;

  constructor(
    protected supplierService: SupplierService,
    public activeModal: NgbActiveModal
) {
  }

  clear(): void {
    this.activeModal.close();
  }

  confirmDelete(id: string): void {
    this.supplierService.delete(id).subscribe(() => {
      this.activeModal.close({
        update: true
      });
    });
  }

  ngOnInit(): void {
  }

}
