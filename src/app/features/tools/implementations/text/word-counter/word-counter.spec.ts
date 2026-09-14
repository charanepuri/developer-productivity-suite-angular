import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WordCounter } from './word-counter';

describe('WordCounter', () => {
  let component: WordCounter;
  let fixture: ComponentFixture<WordCounter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WordCounter],
    }).compileComponents();

    fixture = TestBed.createComponent(WordCounter);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
