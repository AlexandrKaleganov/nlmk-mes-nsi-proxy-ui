import { Component, OnInit } from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-filter-type-resource',
  templateUrl: './filter-type-resource.component.html',
  styleUrls: ['./filter-type-resource.component.css']
})
export class FilterTypeResourceComponent implements OnInit {
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
