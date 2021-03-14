import { Component, OnInit } from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-filter-supplier',
  templateUrl: './filter-supplier.component.html',
  styleUrls: ['./filter-supplier.component.css']
})
export class FilterSupplierComponent implements OnInit {
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
