import { Component, OnInit } from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {ClassMaterialLinkService} from '../class-material-link.service';
import {TypeMaterialLink} from '../../../shared/models/type-material-link.model';
import {ClassMaterialLink} from '../../../shared/models/class-material-link.model';

@Component({
  selector: 'app-delete-class-material-link',
  templateUrl: './delete-class-material-link.component.html',
  styleUrls: ['./delete-class-material-link.component.css']
})
export class DeleteClassMaterialLinkComponent implements OnInit {
  classMaterialLink?: ClassMaterialLink;

  constructor(
    protected classMaterialLinkService: ClassMaterialLinkService,
    public activeModal: NgbActiveModal
  ) {
  }

  clear(): void {
    this.activeModal.close();
  }

  confirmDelete(id: string): void {
    this.classMaterialLinkService.delete(id).subscribe(() => {
      this.activeModal.close({
        update: true
      });
    });
  }

  ngOnInit(): void {
  }

}
