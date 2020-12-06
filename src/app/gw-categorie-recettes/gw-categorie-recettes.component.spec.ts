import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GwCategorieRecettesComponent } from './gw-categorie-recettes.component';

describe('GwCategorieRecettesComponent', () => {
  let component: GwCategorieRecettesComponent;
  let fixture: ComponentFixture<GwCategorieRecettesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GwCategorieRecettesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GwCategorieRecettesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
