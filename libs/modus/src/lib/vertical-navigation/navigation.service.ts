import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { NavigationConfig } from './vertical-navigation.model';

@Injectable({
  providedIn: 'root',
})
export class NavigationService {
  private navigationSubject = new BehaviorSubject<NavigationConfig>(
    {} as NavigationConfig
  );

  get navigation$() {
    return this.navigationSubject.asObservable();
  }

  set(nav: NavigationConfig) {
    this.navigationSubject.next(nav);
  }
}
