import {Component, OnInit} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {MarkResource} from '../../../shared/models/mark-resource.class';
import {TypeResource} from '../../../shared/models/type-resource.model';
import {MarkResourceService} from '../../mark-resource/mark-resource.service';
import {TypeResourceService} from '../../type-resource/type-resource.service';
import {ClassResource} from '../../../shared/models/class-resource.model';
import {ClassResourceService} from '../../class-resource/class-resource.service';
import {QualityIndicator} from '../../../shared/models/quality-indicator.model';
import {RegulatoryDocument} from '../../../shared/models/regulatory-document.model';
import {QualityIndicatorService} from '../../quality-indicator/quality-indicator.service';
import {RegulatoryDocumentService} from '../../regulatory-document/regulatory-document.service';

@Component({
  selector: 'app-filter-reference-value',
  templateUrl: './filter-reference-value.component.html',
  styleUrls: ['./filter-reference-value.component.css']
})
export class FilterReferenceValueComponent implements OnInit {
  codeFilter: string;
  nameFilter: string;
  qualityIndicatorService: QualityIndicatorService;
  regulatoryDocumentService: RegulatoryDocumentService;

  qualityIndicators: QualityIndicator[] = [];
  regulatoryDocuments: RegulatoryDocument[] = [];

  qualityIndicatorId: string;
  regulatoryDocumentId: string;


  constructor(public activeModal: NgbActiveModal, qualityIndicatorService1: QualityIndicatorService, regulatoryDocumentService1: RegulatoryDocumentService) {
    this.qualityIndicatorService = qualityIndicatorService1;
    this.regulatoryDocumentService = regulatoryDocumentService1;
  }

  ngOnInit(): void {
  }

  close(): void {
    this.activeModal.close();
  }

  loadDirectories(): void {
    this.qualityIndicatorService.findAllList().subscribe(res => {
      this.qualityIndicators = res.body;
    });
    this.regulatoryDocumentService.findAllList().subscribe(res => {
      this.regulatoryDocuments = res.body;
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
      qualityIndicatorId: this.qualityIndicatorId,
      regulatoryDocumentId: this.regulatoryDocumentId,
    });
  }
}
