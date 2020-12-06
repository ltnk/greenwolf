import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GwChallengeTrenteComponent } from './gw-challenge-trente.component';

describe('GwChallengeTrenteComponent', () => {
  let component: GwChallengeTrenteComponent;
  let fixture: ComponentFixture<GwChallengeTrenteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GwChallengeTrenteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GwChallengeTrenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
