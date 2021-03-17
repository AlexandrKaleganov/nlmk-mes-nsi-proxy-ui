import { Component, OnInit } from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {QualityIndicatorService} from '../quality-indicator.service';
import {Resource} from '../../../shared/models/resource.model';
import {QualityIndicator} from '../../../shared/models/quality-indicator.model';

@Component({
  selector: 'app-delete-resource',
  templateUrl: './delete-quality-indicator.component.html',
  styleUrls: ['./delete-quality-indicator.component.css']
})
export class DeleteQualityIndicatorComponent implements OnInit {
  qualityIndicator?: QualityIndicator;

  constructor(
    protected resourceService: QualityIndicatorService,
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
