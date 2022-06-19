import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ModusModule } from 'ng-modus';
import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [
    BrowserModule,
    ModusModule,
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
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
