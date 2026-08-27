import { Routes } from '@angular/router';

export const FAVORITES_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/favorites/favorites')
        .then(m => m.Favorites),
    title: 'Favorites | Developer Productivity Suite'
  }
];