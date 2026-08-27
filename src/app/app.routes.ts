import { Routes } from '@angular/router';

export const routes: Routes = [

  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },

  {
    path: 'dashboard',
    loadComponent: () =>
      import(
        './features/dashboard/pages/dashboard/dashboard'
      ).then(m => m.Dashboard)
  },

  {
    path: 'tools',
    loadComponent: () =>
      import(
        './features/tools/pages/tools/tools'
      ).then(m => m.Tools)
  },

  {
    path: 'categories',
    loadComponent: () =>
      import(
        './features/categories/pages/categories/categories'
      ).then(m => m.Categories)
  },

  {
    path: 'search',
    loadComponent: () =>
      import(
        './features/search/pages/search/search'
      ).then(m => m.Search)
  },

  {
    path: 'favorites',
    loadComponent: () =>
      import(
        './features/favorites/pages/favorites/favorites'
      ).then(m => m.Favorites)
  },

  {
    path: 'settings',
    loadComponent: () =>
      import(
        './features/settings/pages/settings/settings'
      ).then(m => m.Settings)
  },

  {
    path: '**',
    redirectTo: 'dashboard'
  }

];