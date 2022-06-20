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
  template: `
    <!-- Item with an internal link -->
    <ng-container *ngIf="item.link">
      <li>
        <a
          [ngClass]="{ 'active bordered': item.active }"
          [routerLink]="[item.link]"
          [routerLinkActive]="'active'"
        >
          <ng-container *ngTemplateOutlet="itemTemplate"></ng-container>
        </a>
      </li>
    </ng-container>

    <!-- Item is disabled -->
    <ng-container *ngIf="item.disabled">
      <div class="disabled">
        <ng-container *ngTemplateOutlet="itemTemplate"></ng-container>
      </div>
    </ng-container>

    <!-- Item template -->
    <ng-template #itemTemplate>
      <!-- Icon -->
      <ng-container *ngIf="item.icon"> IC</ng-container>

      <!-- Title & Subtitle -->
      <p>
        {{ item.title }}
      </p>

      <ng-container *ngIf="item.subtitle">
        <p class="text-xs">
          {{ item.subtitle }}
        </p>
      </ng-container>
    </ng-template>
  `,
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VerticalNavigationItemComponent {
  @Input()
  item!: NavigationItem;

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor() {}
}
