import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GwFooterComponent } from './gw-footer.component';

describe('GwFooterComponent', () => {
  let component: GwFooterComponent;
  let fixture: ComponentFixture<GwFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GwFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GwFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
