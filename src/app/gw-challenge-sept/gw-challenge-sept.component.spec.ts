import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GwChallengeSeptComponent } from './gw-challenge-sept.component';

describe('GwChallengeSeptComponent', () => {
  let component: GwChallengeSeptComponent;
  let fixture: ComponentFixture<GwChallengeSeptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GwChallengeSeptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GwChallengeSeptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
