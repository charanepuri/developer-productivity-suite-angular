import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { map, Observable } from 'rxjs';

import { CategoryService } from '../../../../core/services/category.service';
import { FavoritesService } from '../../../../core/services/favorites.service';
import { RecentToolsService } from '../../../../core/services/recent-tools.service';
import { ToolService } from '../../../../core/services/tool.service';
import { Tool } from '../../../../core/models/tool.model';


@Component({
  selector: 'app-dashboard',
  imports: [AsyncPipe],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})

export class Dashboard {
  private readonly toolService = inject(ToolService);
  private readonly categoryService = inject(CategoryService);
  private readonly favoritesService = inject(FavoritesService);
  private readonly recentToolsService = inject(RecentToolsService);

  readonly toolCount = this.toolService.getToolCount();
  readonly categoryCount = this.categoryService.getCategoryCount();

  readonly favoritesCount$ =
    this.favoritesService.count$;

  readonly recentTools$ = this.recentToolsService.recentTools$.pipe(
    map(ids =>
      ids
        .map(id => this.toolService.getToolById(id))
        .filter((tool): tool is Tool => tool !== undefined)
    )
  );

  readonly recentToolsCount$ =
    this.recentToolsService.recentTools$.pipe(
      map(tools => tools.length)
    );
}