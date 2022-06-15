import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HorizontalNavigationBarComponent } from './horizontal-navigation-bar/horizontal-navigation-bar.component';

@NgModule({
    imports: [CommonModule],
    declarations: [HorizontalNavigationBarComponent],
    exports: [
        HorizontalNavigationBarComponent
    ]
})
export class ModusModule {}
