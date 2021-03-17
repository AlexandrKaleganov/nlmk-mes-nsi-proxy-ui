import {Component, OnInit} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {ClassResource} from '../../../shared/models/class-resource.model';
import {Resource} from '../../../shared/models/resource.model';
import {ResourceService} from '../../resource/resource.service';
import {ClassResourceService} from '../../class-resource/class-resource.service';

@Component({
  selector: 'app-filter-class-material-link',
  templateUrl: './filter-class-material-link.component.html',
  styleUrls: ['./filter-class-material-link.component.css']
})
export class FilterClassMaterialLinkComponent implements OnInit {
  resourceService: ResourceService;
  classResourceService: ClassResourceService;

  materialResourceClassList: ClassResource[] = [];
  materialResourceList: Resource[] = [];

  materialResourceId: string;
  materialResourceClassId: string;


  constructor(public activeModal: NgbActiveModal, resourceService1: ResourceService, classResourceService: ClassResourceService) {
    this.resourceService = resourceService1;
    this.classResourceService = classResourceService;
  }

  ngOnInit(): void {
  }

  close(): void {
    this.activeModal.close();
  }

  loadDirectories(): void {
    this.classResourceService.findAllList().subscribe(res => {
      this.materialResourceClassList = res.body;
    });
    this.resourceService.findAllList().subscribe(res => {
      this.materialResourceList = res.body;
    });
  }

  trackById(index: number, item: Resource): any {
    return item.id;
  }

  trackByIdClass(index: number, item: ClassResource): any {
    return item.id;
  }

  filter(): void {
    this.activeModal.close({
      materialResourceId: this.materialResourceId,
      materialResourceClassId: this.materialResourceClassId,
    });
  }
}
