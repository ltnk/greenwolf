import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GwCategorieBlogComponent } from './gw-categorie-blog.component';

describe('GwCategorieBlogComponent', () => {
  let component: GwCategorieBlogComponent;
  let fixture: ComponentFixture<GwCategorieBlogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GwCategorieBlogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GwCategorieBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
