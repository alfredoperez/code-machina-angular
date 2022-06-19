import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  ViewEncapsulation,
} from '@angular/core';
import { VerticalNavigationItemComponent } from './components/vertical-navigation-item/vertical-navigation-item.component';
import { NavigationConfig } from './vertical-navigation.model';

@Component({
  selector: 'modus-vertical-navigation',
  standalone: true,
  imports: [CommonModule, VerticalNavigationItemComponent],
  template: `
    anavv
    <ng-container *ngFor="let section of config?.sections">
      in section
      {{ section.title }}
      <ul class="menu menu-compact flex flex-col p-0 px-4 bg-base-300">
        <modus-vertical-navigation-item
          *ngFor="let item of section.items"
          [item]="item"
        >
        </modus-vertical-navigation-item>
        <div *ngIf="section.showDivider" class="divider"></div>
      </ul>
    </ng-container>
  `,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VerticalNavigationComponent {
  @Input()
  config!: NavigationConfig | null;
}
