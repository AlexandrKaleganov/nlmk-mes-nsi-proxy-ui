import {Component, OnInit} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {MarkResource} from '../../../shared/models/mark-resource.class';
import {TypeResource} from '../../../shared/models/type-resource.model';
import {MarkResourceService} from '../../mark-resource/mark-resource.service';
import {TypeResourceService} from '../../type-resource/type-resource.service';

@Component({
  selector: 'app-filter-resource',
  templateUrl: './filter-resource.component.html',
  styleUrls: ['./filter-resource.component.css']
})
export class FilterResourceComponent implements OnInit {
  codeFilter: string;
  nameFilter: string;
  markResourceService: MarkResourceService;
  typeResourceService: TypeResourceService;

  materialResourceMarkList: MarkResource[] = [];
  materialResourceTypeList: TypeResource[] = [];

  materialResourceMarkId: string;
  materialResourceTypeId: string;


  constructor(public activeModal: NgbActiveModal, markResourceService: MarkResourceService, typeResourceService: TypeResourceService) {
    this.markResourceService = markResourceService;
    this.typeResourceService = typeResourceService;
  }

  ngOnInit(): void {
  }

  close(): void {
    this.activeModal.close();
  }

  loadDirectories(): void {
    this.markResourceService.findAllList().subscribe(res => {
      this.materialResourceMarkList = res.body;
    });
    this.typeResourceService.findAllList().subscribe(res => {
      this.materialResourceTypeList = res.body;
    });
  }

  trackByIdMark(index: number, item: MarkResource): any {
    return item.id;
  }

  trackByIdType(index: number, item: TypeResource): any {
    return item.id;
  }

  filter(): void {
    this.activeModal.close({
      codeFilter: this.codeFilter,
      nameFilter: this.nameFilter,
      materialResourceMarkId: this.materialResourceMarkId,
      materialResourceTypeId: this.materialResourceTypeId,
    });
  }
}
