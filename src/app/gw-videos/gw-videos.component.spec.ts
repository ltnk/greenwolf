import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GwVideosComponent } from './gw-videos.component';

describe('GwVideosComponent', () => {
  let component: GwVideosComponent;
  let fixture: ComponentFixture<GwVideosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GwVideosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GwVideosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
