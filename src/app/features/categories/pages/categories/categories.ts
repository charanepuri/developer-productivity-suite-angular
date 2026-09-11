import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

import { Category } from '../../../../core/models/category.model';
import { CategoryService } from '../../../../core/services/category.service';

@Component({
  selector: 'app-categories',
  imports: [RouterLink],
  templateUrl: './categories.html',
  styleUrl: './categories.css'
})
export class Categories {
  private readonly categoryService = inject(CategoryService);

  readonly categories: readonly Category[] =
    this.categoryService.getCategories();
}