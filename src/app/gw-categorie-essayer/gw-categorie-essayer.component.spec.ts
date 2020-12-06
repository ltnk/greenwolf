import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GwCategorieEssayerComponent } from './gw-categorie-essayer.component';

describe('GwCategorieEssayerComponent', () => {
  let component: GwCategorieEssayerComponent;
  let fixture: ComponentFixture<GwCategorieEssayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GwCategorieEssayerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GwCategorieEssayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
