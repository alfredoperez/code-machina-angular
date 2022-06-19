import { Component, OnInit } from '@angular/core';
import { NavigationConfig, NavigationService } from 'ng-modus';

@Component({
  selector: 'cm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  navConfig: NavigationConfig;

  constructor(private navigationService: NavigationService) {
    this.navConfig = {
      sections: [
        {
          title: 'Getting started',
          items: [{ title: 'Overview', link: 'home' }],
        },
      ],
    } as NavigationConfig;
  }

  ngOnInit(): void {
    // this.navigationService.set();
  }
}
