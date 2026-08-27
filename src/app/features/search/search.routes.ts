import { Routes } from '@angular/router';

export const SEARCH_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/search/search')
        .then(m => m.Search),
    title: 'Search | Developer Productivity Suite'
  }
];