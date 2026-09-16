import { Injectable, inject } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class RecentToolsService {

  private readonly storageService =
    inject(StorageService);

  private readonly maxRecentTools = 5;

  private readonly recentToolsSubject =
    new BehaviorSubject<string[]>(
      this.loadRecentTools()
    );

  readonly recentTools$ =
    this.recentToolsSubject.asObservable();

  recordUsage(toolId: string): void {

    const currentTools =
      this.recentToolsSubject.value;

    const updatedTools = [
      toolId,
      ...currentTools.filter(
        id => id !== toolId
      )
    ].slice(0, this.maxRecentTools);

    this.updateRecentTools(updatedTools);
  }

  clear(): void {
    this.updateRecentTools([]);
  }

  getRecentToolIds(): readonly string[] {
    return this.recentToolsSubject.value;
  }

  private updateRecentTools(
    toolIds: string[]
  ): void {

    this.recentToolsSubject.next(toolIds);

    this.storageService.set(
      'dps-recent-tools',
      toolIds
    );
  }

  private loadRecentTools(): string[] {

    return this.storageService.get<string[]>(
      'dps-recent-tools'
    ) ?? [];
  }
}