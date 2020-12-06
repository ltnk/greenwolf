import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GwChallengeDixComponent } from './gw-challenge-dix.component';

describe('GwChallengeDixComponent', () => {
  let component: GwChallengeDixComponent;
  let fixture: ComponentFixture<GwChallengeDixComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GwChallengeDixComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GwChallengeDixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
