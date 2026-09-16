import { inject } from '@angular/core';

import {
  CanActivateFn
} from '@angular/router';

import {
  ToolService
} from '../services/tool.service';

export const appReadinessGuard: CanActivateFn =
  () => {

    const toolService =
      inject(ToolService);

    return toolService.getToolCount() > 0;
  };