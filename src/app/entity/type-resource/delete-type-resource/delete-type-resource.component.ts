import { Component, OnInit } from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {TypeResourceService} from '../type-resource.service';
import {TypeResource} from '../../../shared/models/type-resource.model';

@Component({
  selector: 'app-delete-type-resource',
  templateUrl: './delete-type-resource.component.html',
  styleUrls: ['./delete-type-resource.component.css']
})
export class DeleteTypeResourceComponent implements OnInit {
  typeResource?: TypeResource;

  constructor(
    protected typeResourceService: TypeResourceService,
    public activeModal: NgbActiveModal
  ) {
  }

  clear(): void {
    this.activeModal.close();
  }

  confirmDelete(id: string): void {
    this.typeResourceService.delete(id).subscribe(() => {
      this.activeModal.close({
        update: true
      });
    });
  }

  ngOnInit(): void {
  }

}
