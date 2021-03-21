import {Component, OnInit} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {ClassResource} from '../../../shared/models/class-resource.model';
import {Resource} from '../../../shared/models/resource.model';
import {ResourceService} from '../../resource/resource.service';
import {ClassResourceService} from '../../class-resource/class-resource.service';
import {RegulatoryDocument} from '../../../shared/models/regulatory-document.model';
import {RegulatoryDocumentService} from '../../regulatory-document/regulatory-document.service';

@Component({
  selector: 'app-filter-document-material-link',
  templateUrl: './filter-document-material-link.component.html',
  styleUrls: ['./filter-document-material-link.component.css']
})
export class FilterDocumentMaterialLinkComponent implements OnInit {
  resourceService: ResourceService;
  regulatoryDocumentService: RegulatoryDocumentService;

  regulatoryDocuments: RegulatoryDocument[] = [];
  materialResourceList: Resource[] = [];

  materialResourceId: string;
  regulatoryDocumentId: string;


  constructor(public activeModal: NgbActiveModal, resourceService1: ResourceService,
              regulatoryDocumentService1: RegulatoryDocumentService) {
    this.resourceService = resourceService1;
    this.regulatoryDocumentService = regulatoryDocumentService1;
  }

  ngOnInit(): void {
  }

  close(): void {
    this.activeModal.close();
  }

  loadDirectories(): void {
    this.regulatoryDocumentService.findAllList().subscribe(res => {
      this.regulatoryDocuments = res.body;
    });
    this.resourceService.findAllList().subscribe(res => {
      this.materialResourceList = res.body;
    });
  }

  trackById(index: number, item: Resource): any {
    return item.id;
  }

  trackByIdClass(index: number, item: RegulatoryDocument): any {
    return item.id;
  }

  filter(): void {
    this.activeModal.close({
      materialResourceId: this.materialResourceId,
      regulatoryDocumentId: this.regulatoryDocumentId,
    });
  }
}
