import { Routes } from '@angular/router';

export const RECENT_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/recent/recent')
        .then(m => m.Recent),
    title: 'Recently Used | Developer Productivity Suite'
  }
];