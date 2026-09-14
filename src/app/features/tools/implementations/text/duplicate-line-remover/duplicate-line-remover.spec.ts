import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DuplicateLineRemover } from './duplicate-line-remover';

describe('DuplicateLineRemover', () => {
  let component: DuplicateLineRemover;
  let fixture: ComponentFixture<DuplicateLineRemover>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DuplicateLineRemover],
    }).compileComponents();

    fixture = TestBed.createComponent(DuplicateLineRemover);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
