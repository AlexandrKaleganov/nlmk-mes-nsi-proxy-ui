import { Component, OnInit } from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-filter-regulatory-document',
  templateUrl: './filter-regulatory-document.component.html',
  styleUrls: ['./filter-regulatory-document.component.css']
})
export class FilterRegulatoryDocumentComponent implements OnInit {
  codeFilter: string;
  nameFilter: string;
  constructor(public activeModal: NgbActiveModal) {
  }

  ngOnInit(): void {
  }

  close(): void {
    this.activeModal.close();
  }

  filter(): void {
    this.activeModal.close({
      codeFilter: this.codeFilter,
      nameFilter: this.nameFilter ,
    });
  }

}
