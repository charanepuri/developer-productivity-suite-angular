import {
  TestBed
} from '@angular/core/testing';

import {
  Router
} from '@angular/router';

import {
  appReadinessGuard
} from './app-readiness.guard';

import {
  ToolService
} from '../services/tool.service';

describe('appReadinessGuard', () => {

  it('should allow navigation when tools are available', () => {

    const result = TestBed.runInInjectionContext(
      () =>
        appReadinessGuard(
          {} as never,
          {} as never
        )
    );

    expect(result).toBeTrue();
  });

});