import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextReverser } from './text-reverser';

describe('TextReverser', () => {
  let component: TextReverser;
  let fixture: ComponentFixture<TextReverser>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TextReverser],
    }).compileComponents();

    fixture = TestBed.createComponent(TextReverser);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
