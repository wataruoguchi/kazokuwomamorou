import {Component, Input, OnInit} from '@angular/core';
import {reference, situation, tip} from './tips-data';

@Component({
  selector: 'app-situation',
  templateUrl: './situation.component.html',
})
export class SituationComponent implements OnInit {
  id: string;
  header: string;
  tips: tip[];
  references: reference[];

  @Input()
  public set situationBlock(situationBlock: situation) {
    this.id = situationBlock.id;
    this.header = situationBlock.header;
    this.tips = situationBlock.tips;
    this.references = situationBlock.references;
  }

  constructor() {
  }

  ngOnInit(): void {
  }
}
