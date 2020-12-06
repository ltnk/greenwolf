import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GwCategoriesComponent } from './gw-categories.component';

describe('GwCategoriesComponent', () => {
  let component: GwCategoriesComponent;
  let fixture: ComponentFixture<GwCategoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GwCategoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GwCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
