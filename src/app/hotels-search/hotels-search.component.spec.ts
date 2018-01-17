import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelsSearchComponent } from './hotels-search.component';

describe('HotelsSearchComponent', () => {
  let component: HotelsSearchComponent;
  let fixture: ComponentFixture<HotelsSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotelsSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelsSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
