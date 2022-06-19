import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { lowercase } from '../../../../utils/src/lib/string-utils';

@Component({
  selector: 'cm-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePageComponent {
  template = '';

  constructor() {}

  generate() {
    const model = 'User';
    this.template = `
// ${lowercase(model)}

);


`;
  }
}
