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

@Component({
  selector: 'app-favorites',
  imports: [
    AsyncPipe,
    RouterLink
  ],
  templateUrl: './favorites.html',
  styleUrl: './favorites.css'
})
export class Favorites {

  private readonly toolService =
    inject(ToolService);

  readonly favoritesService =
    inject(FavoritesService);

  readonly favoriteTools$ =
    this.favoritesService.favorites$.pipe(
      map(ids =>
        ids
          .map(id =>
            this.toolService.getToolById(id)
          )
          .filter(
            (tool): tool is Tool =>
              tool !== undefined
          )
      )
    );

  removeFavorite(toolId: string): void {
    this.favoritesService
      .removeFavorite(toolId);
  }
}