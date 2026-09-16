import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsonValidator } from './json-validator';

describe('JsonValidator', () => {
  let component: JsonValidator;
  let fixture: ComponentFixture<JsonValidator>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JsonValidator],
    }).compileComponents();

    fixture = TestBed.createComponent(JsonValidator);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
