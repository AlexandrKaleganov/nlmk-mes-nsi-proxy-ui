import { Component, OnInit } from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {QualityIndicatorMaterialLinkService} from '../quality-indicator-material-link.service';
import {Resource} from '../../../shared/models/resource.model';
import {TypeMaterialLink} from '../../../shared/models/type-material-link.model';

@Component({
  selector: 'app-delete-quality-indicator-material-link',
  templateUrl: './delete-quality-indicator-material-link.component.html',
  styleUrls: ['./delete-quality-indicator-material-link.component.css']
})
export class DeleteQualityIndicatorMaterialLinkComponent implements OnInit {
  typeMaterialLink?: TypeMaterialLink;

  constructor(
    protected resourceService: QualityIndicatorMaterialLinkService,
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
