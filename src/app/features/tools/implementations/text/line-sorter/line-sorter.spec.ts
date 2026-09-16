import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LineSorter } from './line-sorter';

describe('LineSorter', () => {
  let component: LineSorter;
  let fixture: ComponentFixture<LineSorter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LineSorter],
    }).compileComponents();

    fixture = TestBed.createComponent(LineSorter);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
