import {
  Component,
  inject,
  input
} from '@angular/core';

import {
  RouterLink
} from '@angular/router';

import {
  Tool
} from '../../../../core/models/tool.model';

import {
  FavoritesService
} from '../../../../core/services/favorites.service';

@Component({
  selector: 'app-tool-card',
  imports: [
    RouterLink
  ],
  templateUrl: './tool-card.html',
  styleUrl: './tool-card.css'
})
export class ToolCard {

  readonly tool = input.required<Tool>();

  private readonly favoritesService =
    inject(FavoritesService);

  isFavorite(): boolean {
    return this.favoritesService
      .isFavorite(this.tool().id);
  }

  toggleFavorite(event: Event): void {

    event.preventDefault();
    event.stopPropagation();

    this.favoritesService.toggleFavorite(
      this.tool().id
    );
  }
}