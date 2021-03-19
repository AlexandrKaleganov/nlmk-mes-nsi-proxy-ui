import {Component, OnInit} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {StructureCompanyMaterialLinkService} from '../structure-company-material-link.service';
import {TypeMaterialLink} from '../../../shared/models/type-material-link.model';
import {StructureCompanyMaterialLink} from '../../../shared/models/structure-company-material-link.model';

@Component({
  selector: 'app-delete-structure-company-material-link',
  templateUrl: './delete-structure-company-material-link.component.html',
  styleUrls: ['./delete-structure-company-material-link.component.css']
})
export class DeleteStructureCompanyMaterialLinkComponent implements OnInit {
  structureCompanyMaterialLink?: StructureCompanyMaterialLink;

  constructor(
    protected resourceService: StructureCompanyMaterialLinkService,
    public activeModal: NgbActiveModal
  ) {
  }

  clear(): void {
    this.activeModal.close();
  }

  confirmDelete(id: string): void {
    this.resourceService.delete(id).subscribe(() => {
      this.activeModal.close({
        update: true
      });
    });
  }

  ngOnInit(): void {
  }

}
