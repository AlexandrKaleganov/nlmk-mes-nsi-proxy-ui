import {Component, OnInit} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {MarkResource} from '../../../shared/models/mark-resource.class';
import {TypeResource} from '../../../shared/models/type-resource.model';
import {MarkResourceService} from '../../mark-resource/mark-resource.service';
import {TypeResourceService} from '../../type-resource/type-resource.service';
import {ClassResource} from '../../../shared/models/class-resource.model';
import {ClassResourceService} from '../../class-resource/class-resource.service';

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
  classResourceService: ClassResourceService;

  materialResourceMarkList: MarkResource[] = [];
  materialResourceTypeList: TypeResource[] = [];
  materialResourceClassList: ClassResource[] = [];

  materialResourceMarkId: string;
  materialResourceTypeId: string;
  materialResourceClassId: string;


  constructor(public activeModal: NgbActiveModal, markResourceService: MarkResourceService, typeResourceService: TypeResourceService,
              classResourceService: ClassResourceService) {
    this.markResourceService = markResourceService;
    this.typeResourceService = typeResourceService;
    this.classResourceService = classResourceService;
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
    this.classResourceService.findAllList().subscribe(res => {
      this.materialResourceClassList = res.body;
    });
  }

  trackByIdMark(index: number, item: MarkResource): any {
    return item.id;
  }

  trackByIdType(index: number, item: TypeResource): any {
    return item.id;
  }

  trackByIdClass(index: number, item: ClassResource): any {
    return item.id;
  }

  filter(): void {
    this.activeModal.close({
      codeFilter: this.codeFilter,
      nameFilter: this.nameFilter,
      materialResourceMarkId: this.materialResourceMarkId,
      materialResourceTypeId: this.materialResourceTypeId,
      materialResourceClassId: this.materialResourceClassId,
    });
  }
}
