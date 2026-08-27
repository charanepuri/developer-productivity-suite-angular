import { Component, inject } from '@angular/core';
import {
  RouterLink,
  RouterLinkActive
} from '@angular/router';

import { NavigationService } from '../../../core/services/navigation.service';
import { NavigationItem } from '../../../core/models/navigation-item.model';

@Component({
  selector: 'app-sidebar',
  imports: [
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css'
})
export class Sidebar {

  private readonly navigationService = inject(NavigationService);

  readonly navigationItems: NavigationItem[] =
    this.navigationService.getNavigationItems();

}