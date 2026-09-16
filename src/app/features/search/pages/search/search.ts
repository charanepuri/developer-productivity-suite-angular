import {
  AsyncPipe
} from '@angular/common';

import {
  Component,
  inject
} from '@angular/core';

import {
  FormControl,
  FormGroup,
  ReactiveFormsModule
} from '@angular/forms';

import {
  ActivatedRoute,
  Router,
  RouterLink
} from '@angular/router';

import {
  combineLatest,
  map,
  startWith
} from 'rxjs';

import {
  Tool
} from '../../../../core/models/tool.model';

import {
  ToolCategory
} from '../../../../core/models/tool-category.type';

import {
  ToolService
} from '../../../../core/services/tool.service';

@Component({
  selector: 'app-search',
  imports: [
    AsyncPipe,
    ReactiveFormsModule,
    RouterLink
  ],
  templateUrl: './search.html',
  styleUrl: './search.css'
})
export class Search {

  private readonly toolService =
    inject(ToolService);

  private readonly route =
    inject(ActivatedRoute);

  private readonly router =
    inject(Router);

  readonly categories: readonly ToolCategory[] = [
    'Text Tools',
    'JSON Tools',
    'Security Tools',
    'CSS Tools',
    'Color Tools',
    'Markdown Tools',
    'Developer Tools',
    'Date & Time Tools'
  ];

  readonly searchForm =
    new FormGroup({
      query: new FormControl('', {
        nonNullable: true
      }),

      category: new FormControl<
        ToolCategory | ''
      >('', {
        nonNullable: true
      })
    });

  readonly results$ =
    combineLatest([
      this.searchForm.controls.query.valueChanges
        .pipe(
          startWith(
            this.searchForm.controls.query.value
          )
        ),

      this.searchForm.controls.category.valueChanges
        .pipe(
          startWith(
            this.searchForm.controls.category.value
          )
        )
    ]).pipe(

      map(([query, category]) => {

        let results =
          this.toolService.searchTools(query);

        if (category) {
          results =
            results.filter(
              tool =>
                tool.category === category
            );
        }

        return results;

      })
    );

  constructor() {

    this.route.queryParamMap
      .subscribe(params => {

        const query =
          params.get('q') ?? '';

        this.searchForm.controls.query
          .setValue(query, {
            emitEvent: true
          });

      });
  }

  updateUrl(): void {

    const query =
      this.searchForm.controls.query.value
        .trim();

    const category =
      this.searchForm.controls.category.value;

    this.router.navigate(
      ['/search'],
      {
        queryParams: {
          ...(query ? { q: query } : {}),
          ...(category ? { category } : {})
        }
      }
    );
  }

  clearFilters(): void {

    this.searchForm.reset({
      query: '',
      category: ''
    });

    this.router.navigate(
      ['/search']
    );
  }

  trackByTool(
    _index: number,
    tool: Tool
  ): string {
    return tool.id;
  }
}