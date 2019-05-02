import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SortChipsComponent } from './sort-chips.component';

describe('SortChipsComponent', () => {
  let component: SortChipsComponent;
  let fixture: ComponentFixture<SortChipsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SortChipsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SortChipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
