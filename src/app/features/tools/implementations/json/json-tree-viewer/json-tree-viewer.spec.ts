import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsonTreeViewer } from './json-tree-viewer';

describe('JsonTreeViewer', () => {
  let component: JsonTreeViewer;
  let fixture: ComponentFixture<JsonTreeViewer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JsonTreeViewer],
    }).compileComponents();

    fixture = TestBed.createComponent(JsonTreeViewer);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
