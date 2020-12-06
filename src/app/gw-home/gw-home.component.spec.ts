import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GwHomeComponent } from './gw-home.component';

describe('GwHomeComponent', () => {
  let component: GwHomeComponent;
  let fixture: ComponentFixture<GwHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GwHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GwHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
