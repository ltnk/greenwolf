import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GwConnexionComponent } from './gw-connexion.component';

describe('GwConnexionComponent', () => {
  let component: GwConnexionComponent;
  let fixture: ComponentFixture<GwConnexionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GwConnexionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GwConnexionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
