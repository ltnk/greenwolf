import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GwHeaderComponent } from './gw-header.component';

describe('GwHeaderComponent', () => {
  let component: GwHeaderComponent;
  let fixture: ComponentFixture<GwHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GwHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GwHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
