import {
  Injectable,
  inject
} from '@angular/core';

import { BehaviorSubject } from 'rxjs';

import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class RecentToolsService {

  private readonly storageService =
    inject(StorageService);

  private readonly storageKey =
    'dps-recent-tools';

  private readonly maximumItems = 5;

  private readonly recentToolsSubject =
    new BehaviorSubject<string[]>(
      this.loadRecentTools()
    );

  readonly recentTools$ =
    this.recentToolsSubject.asObservable();

  recordUsage(toolId: string): void {

    const existing =
      this.recentToolsSubject.value;

    const updated = [
      toolId,
      ...existing.filter(id => id !== toolId)
    ].slice(0, this.maximumItems);

    this.recentToolsSubject.next(updated);

    this.storageService.set(
      this.storageKey,
      updated
    );
  }

  clear(): void {
    this.recentToolsSubject.next([]);

    this.storageService.remove(
      this.storageKey
    );
  }

  getRecentToolIds(): readonly string[] {
    return this.recentToolsSubject.value;
  }

  private loadRecentTools(): string[] {
    return this.storageService.get<string[]>(
      this.storageKey
    ) ?? [];
  }
}