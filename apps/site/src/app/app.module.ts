import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from "@angular/router";
import { ModusModule } from "ng-modus";
import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
    imports: [BrowserModule, ModusModule, RouterModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
