import { Component, Input } from '@angular/core';
import { CellModel } from './cell.model';

@Component({
  selector: 'cell',
  templateUrl: 'cell.html'
})
export class CellComponent {
  @Input() model: CellModel;

  constructor() {
    console.log(this.model);
  }

  onTap($event: Event): void {
    console.log('tap');
  }
}
