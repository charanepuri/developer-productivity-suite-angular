import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaseConverter } from './case-converter';

describe('CaseConverter', () => {
  let component: CaseConverter;
  let fixture: ComponentFixture<CaseConverter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CaseConverter],
    }).compileComponents();

    fixture = TestBed.createComponent(CaseConverter);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
