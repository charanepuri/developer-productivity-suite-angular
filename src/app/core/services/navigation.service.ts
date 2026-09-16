import { Injectable } from '@angular/core';

import { NavigationItem } from '../models/navigation-item.model';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  private readonly navigationItems: NavigationItem[] = [
    {
      label: 'Dashboard',
      route: '/dashboard',
      icon: '⌂',
      exact: true
    },
    {
      label: 'Tools',
      route: '/tools',
      icon: '⚙'
    },
    {
      label: 'Categories',
      route: '/categories',
      icon: '▦'
    },
    {
      label: 'Search',
      route: '/search',
      icon: '⌕'
    },
    {
      label: 'Favorites',
      route: '/favorites',
      icon: '★'
    },
    {
      label: 'Settings',
      route: '/settings',
      icon: '⚙'
    },
    {
  label: 'About',
  route: '/about',
  icon: 'ⓘ'
}
  ];

  getNavigationItems(): NavigationItem[] {
    return this.navigationItems;
  }
}