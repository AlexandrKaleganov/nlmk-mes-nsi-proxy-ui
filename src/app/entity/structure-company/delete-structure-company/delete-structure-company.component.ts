import { Component, OnInit } from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {StructureCompanyService} from '../structure-company.service';
import {StructureCompany} from '../../../shared/models/structure-company';

@Component({
  selector: 'app-delete-structure-company',
  templateUrl: './delete-structure-company.component.html',
  styleUrls: ['./delete-structure-company.component.css']
})
export class DeleteStructureCompanyComponent implements OnInit {
  structureCompany?: StructureCompany;

  constructor(
    protected supplierService: StructureCompanyService,
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
