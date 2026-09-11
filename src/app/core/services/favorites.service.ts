import {
  Injectable,
  inject
} from '@angular/core';

import {
  BehaviorSubject,
  map
} from 'rxjs';

import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {

  private readonly storageService =
    inject(StorageService);

  private readonly storageKey =
    'dps-favorites';

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
    return this.favoritesSubject
      .value
      .includes(toolId);
  }

  addFavorite(toolId: string): void {
    if (this.isFavorite(toolId)) {
      return;
    }

    const updatedFavorites = [
      ...this.favoritesSubject.value,
      toolId
    ];

    this.updateFavorites(updatedFavorites);
  }

  removeFavorite(toolId: string): void {
    const updatedFavorites =
      this.favoritesSubject.value.filter(
        id => id !== toolId
      );

    this.updateFavorites(updatedFavorites);
  }

  toggleFavorite(toolId: string): void {
    if (this.isFavorite(toolId)) {
      this.removeFavorite(toolId);
      return;
    }

    this.addFavorite(toolId);
  }

  getFavoriteIds(): readonly string[] {
    return this.favoritesSubject.value;
  }

  private updateFavorites(
    favorites: string[]
  ): void {

    this.favoritesSubject.next(favorites);

    this.storageService.set(
      this.storageKey,
      favorites
    );
  }

  private loadFavorites(): string[] {
    return this.storageService.get<string[]>(
      this.storageKey
    ) ?? [];
  }
}