import {Component, OnInit} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {ReferenceValueService} from '../reference-value.service';
import {ReferenceValue} from '../../../shared/models/reference-value.model';

@Component({
  selector: 'app-delete-reference-value',
  templateUrl: './delete-reference-value.component.html',
  styleUrls: ['./delete-reference-value.component.css']
})
export class DeleteReferenceValueComponent implements OnInit {
  referenceValue?: ReferenceValue;

  constructor(
    protected resourceService: ReferenceValueService,
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
