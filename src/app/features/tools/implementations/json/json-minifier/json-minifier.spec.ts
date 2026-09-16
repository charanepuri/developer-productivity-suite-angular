import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsonMinifier } from './json-minifier';

describe('JsonMinifier', () => {
  let component: JsonMinifier;
  let fixture: ComponentFixture<JsonMinifier>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JsonMinifier],
    }).compileComponents();

    fixture = TestBed.createComponent(JsonMinifier);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
