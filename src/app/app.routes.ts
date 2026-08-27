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
      import('./features/dashboard/pages/dashboard/dashboard.component')
        .then(m => m.DashboardComponent)
  },

  {
    path: 'tools',
    loadComponent: () =>
      import('./features/tools/pages/tools/tools.component')
        .then(m => m.ToolsComponent)
  },

  {
    path: 'categories',
    loadComponent: () =>
      import('./features/categories/pages/categories/categories.component')
        .then(m => m.CategoriesComponent)
  },

  {
    path: 'search',
    loadComponent: () =>
      import('./features/search/pages/search/search.component')
        .then(m => m.SearchComponent)
  },

  {
    path: 'favorites',
    loadComponent: () =>
      import('./features/favorites/pages/favorites/favorites.component')
        .then(m => m.FavoritesComponent)
  },

  {
    path: 'settings',
    loadComponent: () =>
      import('./features/settings/pages/settings/settings.component')
        .then(m => m.SettingsComponent)
  },

  {
    path: '**',
    redirectTo: 'dashboard'
  }
];