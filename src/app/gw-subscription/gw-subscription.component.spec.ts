import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GwSubscriptionComponent } from './gw-subscription.component';

describe('GwSubscriptionComponent', () => {
  let component: GwSubscriptionComponent;
  let fixture: ComponentFixture<GwSubscriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GwSubscriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GwSubscriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
