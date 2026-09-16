import {
  Component,
  inject
} from '@angular/core';

import {
  FormControl,
  ReactiveFormsModule
} from '@angular/forms';

import {
  Router,
  RouterLink
} from '@angular/router';

import {
  debounceTime,
  distinctUntilChanged
} from 'rxjs';

import { AppStateService } from '../../../../core/services/app-state.service';

@Component({
  selector: 'app-search-bar',
  imports: [
    ReactiveFormsModule,
    RouterLink
  ],
  templateUrl: './search-bar.html',
  styleUrl: './search-bar.css'
})
export class SearchBar {

  private readonly router = inject(Router);

  private readonly appState =
    inject(AppStateService);

  readonly searchControl =
    new FormControl('', {
      nonNullable: true
    });

  constructor() {

    this.searchControl.valueChanges
      .pipe(
        debounceTime(250),
        distinctUntilChanged()
      )
      .subscribe(query => {
        this.appState.setSearchQuery(query);
      });
  }

  openSearch(): void {

    const query =
      this.searchControl.value.trim();

    this.router.navigate(
      ['/search'],
      {
        queryParams: query
          ? { q: query }
          : {}
      }
    );
  }

  clearSearch(): void {
    this.searchControl.setValue('');
    this.appState.clearSearchQuery();
  }
}