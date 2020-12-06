import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GwEbooksComponent } from './gw-ebooks.component';

describe('GwEbooksComponent', () => {
  let component: GwEbooksComponent;
  let fixture: ComponentFixture<GwEbooksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GwEbooksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GwEbooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
