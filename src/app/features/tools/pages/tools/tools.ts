import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { map, Observable } from 'rxjs';

import { Tool } from '../../../../core/models/tool.model';
import { ToolCategory } from '../../../../core/models/tool-category.type';
import { ToolService } from '../../../../core/services/tool.service';

@Component({
  selector: 'app-tools',
  imports: [AsyncPipe, RouterLink],
  templateUrl: './tools.html',
  styleUrl: './tools.css'
})
export class Tools {
  private readonly toolService = inject(ToolService);
  private readonly route = inject(ActivatedRoute);

  readonly selectedCategory$: Observable<ToolCategory | null> =
    this.route.queryParamMap.pipe(
      map(params => {
        const category = params.get('category');

        if (!category) {
          return null;
        }

        return this.isToolCategory(category)
          ? category
          : null;
      })
    );

  readonly tools$: Observable<readonly Tool[]> =
    this.selectedCategory$.pipe(
      map(category =>
        category
          ? this.toolService.getToolsByCategory(category)
          : this.toolService.getTools()
      )
    );

  readonly totalTools =
    this.toolService.getToolCount();

  private isToolCategory(
    value: string
  ): value is ToolCategory {
    const categories: readonly ToolCategory[] = [
      'Text Tools',
      'JSON Tools',
      'Security Tools',
      'CSS Tools',
      'Color Tools',
      'Markdown Tools',
      'Developer Tools',
      'Date & Time Tools'
    ];

    return categories.includes(
      value as ToolCategory
    );
  }
}