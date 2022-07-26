import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { VerticalNavigationComponent } from 'ng-modus';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,

    RouterModule.forRoot([
      { path: '', pathMatch: 'full', redirectTo: 'pages' },
      {
        path: 'pages',
        loadChildren: () =>
          import('@code-machina/feature-generators').then(
            (mod) => mod.FeatureGeneratorsModule // added
          ),
      },
    ]),

    VerticalNavigationComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
