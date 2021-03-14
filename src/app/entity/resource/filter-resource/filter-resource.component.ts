import { Component, OnInit } from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-filter-resource',
  templateUrl: './filter-resource.component.html',
  styleUrls: ['./filter-resource.component.css']
})
export class FilterResourceComponent implements OnInit {
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
