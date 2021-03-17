import { Component, OnInit } from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {TypeMaterialLinkService} from '../type-material-link.service';
import {Resource} from '../../../shared/models/resource.model';
import {TypeMaterialLink} from '../../../shared/models/type-material-link.model';

@Component({
  selector: 'app-delete-type-material-link',
  templateUrl: './delete-type-material-link.component.html',
  styleUrls: ['./delete-type-material-link.component.css']
})
export class DeleteTypeMaterialLinkComponent implements OnInit {
  typeMaterialLink?: TypeMaterialLink;

  constructor(
    protected resourceService: TypeMaterialLinkService,
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
