import { Component, OnInit } from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {DocumentMaterialLinkService} from '../document-material-link.service';
import {TypeMaterialLink} from '../../../shared/models/type-material-link.model';
import {DocumentMaterialLink} from '../../../shared/models/document-material-link.model';

@Component({
  selector: 'app-delete-document-material-link',
  templateUrl: './delete-document-material-link.component.html',
  styleUrls: ['./delete-document-material-link.component.css']
})
export class DeleteDocumentMaterialLinkComponent implements OnInit {
  documentMaterialLink?: DocumentMaterialLink;

  constructor(
    protected documentMaterialLinkService: DocumentMaterialLinkService,
    public activeModal: NgbActiveModal
  ) {
  }

  clear(): void {
    this.activeModal.close();
  }

  confirmDelete(id: string): void {
    this.documentMaterialLinkService.delete(id).subscribe(() => {
      this.activeModal.close({
        update: true
      });
    });
  }

  ngOnInit(): void {
  }

}
