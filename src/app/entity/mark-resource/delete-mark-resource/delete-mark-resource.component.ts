import { Component, OnInit } from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {MarkResource} from '../../../shared/models/mark-resource.class';
import {MarkResourceService} from '../mark-resource.service';

@Component({
  selector: 'app-delete-mark-resource',
  templateUrl: './delete-mark-resource.component.html',
  styleUrls: ['./delete-mark-resource.component.css']
})
export class DeleteMarkResourceComponent implements OnInit {
  markResource?: MarkResource;

  constructor(
    protected markResourceService: MarkResourceService,
    public activeModal: NgbActiveModal
  ) {
  }

  clear(): void {
    this.activeModal.close();
  }

  confirmDelete(id: string): void {
    this.markResourceService.delete(id).subscribe(() => {
      this.activeModal.close({
        update: true
      });
    });
  }

  ngOnInit(): void {
  }

}
