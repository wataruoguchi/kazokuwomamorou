import {Component, Input, OnInit} from '@angular/core';
import {reference, situation, tip} from './tips-data';

@Component({
  selector: 'app-situation',
  templateUrl: './situation.component.html',
})
export class SituationComponent {
  id: string;
  header: string;
  tips: tip[];
  references: reference[];
  hasMultipleTips: boolean;

  @Input()
  public set situationBlock(situationBlock: situation) {
    this.id = situationBlock.id;
    this.header = situationBlock.header;
    this.tips = situationBlock.tips;
    this.references = situationBlock.references;
    this.hasMultipleTips = situationBlock.tips.length > 1;
  }

  constructor() {
  }
}
