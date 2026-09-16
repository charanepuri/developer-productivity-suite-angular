import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlugGenerator } from './slug-generator';

describe('SlugGenerator', () => {
  let component: SlugGenerator;
  let fixture: ComponentFixture<SlugGenerator>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SlugGenerator],
    }).compileComponents();

    fixture = TestBed.createComponent(SlugGenerator);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
