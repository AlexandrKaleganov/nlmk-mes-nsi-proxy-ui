import {Component, OnInit} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {StructureCompanyService} from '../structure-company.service';
import {StructureCompany} from '../../../shared/models/structure-company';

@Component({
  selector: 'app-filter-structure-company',
  templateUrl: './filter-structure-company.component.html',
  styleUrls: ['./filter-structure-company.component.css']
})
export class FilterStructureCompanyComponent implements OnInit {
  codeFilter: string;
  nameFilter: string;
  parentIdFilter: string;
  parentList: StructureCompany[] = [];
  structureCompanyService1: StructureCompanyService;

  constructor(public activeModal: NgbActiveModal, structureCompanyService: StructureCompanyService) {
    this.structureCompanyService1 = structureCompanyService;
  }

  ngOnInit(): void {
  }
  trackById(index: number, item: StructureCompany): any {
    return item.id;
  }

  close(): void {
    this.activeModal.close();
  }

  loaDirectories(): void {
    this.structureCompanyService1.findAllList()
      .subscribe(res => this.parentList = res.body);
  }

  filter(): void {
    this.activeModal.close({
      codeFilter: this.codeFilter,
      nameFilter: this.nameFilter,
      parentIdFilter: this.parentIdFilter,
    });
  }

}
