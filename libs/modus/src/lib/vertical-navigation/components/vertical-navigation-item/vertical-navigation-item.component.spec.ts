import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerticalNavigationItemComponent } from './vertical-navigation-item.component';

describe('VerticalNavigationItemComponent', () => {
  let component: VerticalNavigationItemComponent;
  let fixture: ComponentFixture<VerticalNavigationItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VerticalNavigationItemComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(VerticalNavigationItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
