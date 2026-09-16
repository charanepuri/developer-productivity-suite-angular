import { Routes } from '@angular/router';

export const routes: Routes = [

  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'dashboard'
  },

  {
    path: 'dashboard',
    loadChildren: () =>
      import('./features/dashboard/dashboard.routes')
        .then(m => m.DASHBOARD_ROUTES)
  },

  {
    path: 'tools',
    loadChildren: () =>
      import('./features/tools/tools.routes')
        .then(m => m.TOOLS_ROUTES)
  },

  {
    path: 'categories',
    loadChildren: () =>
      import('./features/categories/categories.routes')
        .then(m => m.CATEGORIES_ROUTES)
  },

  {
    path: 'search',
    loadChildren: () =>
      import('./features/search/search.routes')
        .then(m => m.SEARCH_ROUTES)
  },

  {
    path: 'favorites',
    loadChildren: () =>
      import('./features/favorites/favorites.routes')
        .then(m => m.FAVORITES_ROUTES)
  },

  {
  path: 'recent',
  loadChildren: () =>
    import('./features/recent/recent.routes')
      .then(m => m.RECENT_ROUTES)
},

  {
    path: 'settings',
    loadChildren: () =>
      import('./features/settings/settings.routes')
        .then(m => m.SETTINGS_ROUTES)
  },

  {
  path: 'about',
  loadChildren: () =>
    import('./features/about/about.routes')
      .then(m => m.ABOUT_ROUTES)
},


  {
    path: '**',
    loadComponent: () =>
      import('./shared/components/not-found/not-found')
        .then(m => m.NotFound),
    title: 'Page Not Found | Developer Productivity Suite'
  }

];