import {
  Injectable
} from '@angular/core';

import {
  BehaviorSubject
} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppStateService {

  private readonly searchQuerySubject =
    new BehaviorSubject<string>('');

  readonly searchQuery$ =
    this.searchQuerySubject.asObservable();

  setSearchQuery(query: string): void {
    this.searchQuerySubject.next(query);
  }

  getSearchQuery(): string {
    return this.searchQuerySubject.value;
  }

  clearSearchQuery(): void {
    this.searchQuerySubject.next('');
  }
}