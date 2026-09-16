import { Injectable, inject } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';

import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {

  private readonly storageService =
    inject(StorageService);

  private readonly favoritesSubject =
    new BehaviorSubject<string[]>(
      this.loadFavorites()
    );

  readonly favorites$ =
    this.favoritesSubject.asObservable();

  readonly count$ =
    this.favorites$.pipe(
      map(favorites => favorites.length)
    );

  isFavorite(toolId: string): boolean {
    return this.favoritesSubject.value
      .includes(toolId);
  }

  addFavorite(toolId: string): void {

    if (this.isFavorite(toolId)) {
      return;
    }

    const favorites = [
      ...this.favoritesSubject.value,
      toolId
    ];

    this.updateFavorites(favorites);
  }

  removeFavorite(toolId: string): void {

    const favorites =
      this.favoritesSubject.value.filter(
        id => id !== toolId
      );

    this.updateFavorites(favorites);
  }

  toggleFavorite(toolId: string): void {

    if (this.isFavorite(toolId)) {
      this.removeFavorite(toolId);
    } else {
      this.addFavorite(toolId);
    }
  }

  getFavoriteIds(): readonly string[] {
    return this.favoritesSubject.value;
  }

  clearFavorites(): void {
    this.updateFavorites([]);
  }

  private updateFavorites(
    favorites: string[]
  ): void {

    this.favoritesSubject.next(favorites);

    this.storageService.set(
      'dps-favorites',
      favorites
    );
  }

  private loadFavorites(): string[] {

    return this.storageService.get<string[]>(
      'dps-favorites'
    ) ?? [];
  }
}