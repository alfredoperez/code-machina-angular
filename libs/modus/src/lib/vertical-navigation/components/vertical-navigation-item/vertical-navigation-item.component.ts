import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  ViewEncapsulation,
} from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavigationItem } from '../../vertical-navigation.model';

@Component({
  selector: 'modus-vertical-navigation-item',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './vertical-navigation-item.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VerticalNavigationItemComponent {
  @Input()
  item!: NavigationItem;

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor() {}
}
