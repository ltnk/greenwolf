import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GwCategorieZeroDechetComponent } from './gw-categorie-zero-dechet.component';

describe('GwCategorieZeroDechetComponent', () => {
  let component: GwCategorieZeroDechetComponent;
  let fixture: ComponentFixture<GwCategorieZeroDechetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GwCategorieZeroDechetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GwCategorieZeroDechetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
