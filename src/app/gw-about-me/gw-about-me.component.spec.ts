import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GwAboutMeComponent } from './gw-about-me.component';

describe('GwAboutMeComponent', () => {
  let component: GwAboutMeComponent;
  let fixture: ComponentFixture<GwAboutMeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GwAboutMeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GwAboutMeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
