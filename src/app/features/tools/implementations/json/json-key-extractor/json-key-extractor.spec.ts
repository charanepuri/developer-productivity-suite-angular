import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsonKeyExtractor } from './json-key-extractor';

describe('JsonKeyExtractor', () => {
  let component: JsonKeyExtractor;
  let fixture: ComponentFixture<JsonKeyExtractor>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JsonKeyExtractor],
    }).compileComponents();

    fixture = TestBed.createComponent(JsonKeyExtractor);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
