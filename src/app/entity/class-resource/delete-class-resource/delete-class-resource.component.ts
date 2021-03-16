import { Component, OnInit } from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {ClassResourceService} from '../class-resource.service';
import {TypeResource} from '../../../shared/models/type-resource.model';

@Component({
  selector: 'app-delete-class-resource',
  templateUrl: './delete-class-resource.component.html',
  styleUrls: ['./delete-class-resource.component.css']
})
export class DeleteClassResourceComponent implements OnInit {
  classResource?: TypeResource;

  constructor(
    protected typeResourceService: ClassResourceService,
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
