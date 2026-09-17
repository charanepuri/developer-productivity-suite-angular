import {
  AsyncPipe
} from '@angular/common';

import {
  Component,
  inject
} from '@angular/core';

import {
  RouterLink
} from '@angular/router';

import {
  map
} from 'rxjs';

import {
  Tool
} from '../../../../core/models/tool.model';

import {
  ToolService
} from '../../../../core/services/tool.service';

import {
  FavoritesService
} from '../../../../core/services/favorites.service';

import {
  RecentToolsService
} from '../../../../core/services/recent-tools.service';


@Component({
  selector: 'app-dashboard',
  imports: [
    AsyncPipe,
    RouterLink
  ],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard {

  private readonly toolService =
    inject(ToolService);

  private readonly favoritesService =
    inject(FavoritesService);

  private readonly recentToolsService =
    inject(RecentToolsService);


  /*
   * Dashboard statistics
   */

  readonly totalTools =
    this.toolService.getToolCount();

  readonly totalCategories =
    this.toolService.getCategoryCount();


  /*
   * Favorites
   */

  readonly favoriteCount$ =
    this.favoritesService.count$;


  /*
   * Recently Used
   *
   * RecentToolsService stores tool IDs.
   * Convert those IDs into actual Tool objects
   * for the dashboard UI.
   */

  readonly recentTools$ =
    this.recentToolsService.recentTools$.pipe(
      map(toolIds =>
        toolIds
          .map(id =>
            this.toolService.getToolById(id)
          )
          .filter(
            (tool): tool is Tool =>
              tool !== undefined
          )
      )
    );
}