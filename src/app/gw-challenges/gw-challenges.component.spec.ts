import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GwChallengesComponent } from './gw-challenges.component';

describe('GwChallengesComponent', () => {
  let component: GwChallengesComponent;
  let fixture: ComponentFixture<GwChallengesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GwChallengesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GwChallengesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
