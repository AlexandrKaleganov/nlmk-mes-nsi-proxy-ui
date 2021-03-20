import { Component, OnInit } from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {Supplier} from '../../../shared/models/supplier.model';
import {RegulatoryDocumentService} from '../regulatory-document.service';
import {RegulatoryDocument} from '../../../shared/models/regulatory-document.model';

@Component({
  selector: 'app-delete-regulatory-document',
  templateUrl: './delete-regulatory-document.component.html',
  styleUrls: ['./delete-regulatory-document.component.css']
})
export class DeleteRegulatoryDocumentComponent implements OnInit {
  regulatoryDocument?: RegulatoryDocument;

  constructor(
    protected supplierService: RegulatoryDocumentService,
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
