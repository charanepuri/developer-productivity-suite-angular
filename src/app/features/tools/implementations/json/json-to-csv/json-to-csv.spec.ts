import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsonToCsv } from './json-to-csv';

describe('JsonToCsv', () => {
  let component: JsonToCsv;
  let fixture: ComponentFixture<JsonToCsv>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JsonToCsv],
    }).compileComponents();

    fixture = TestBed.createComponent(JsonToCsv);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
