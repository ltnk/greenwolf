import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GwSideMenuComponent } from './gw-side-menu.component';

describe('GwSideMenuComponent', () => {
  let component: GwSideMenuComponent;
  let fixture: ComponentFixture<GwSideMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GwSideMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GwSideMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
