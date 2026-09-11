import { Injectable } from '@angular/core';

import { CATEGORIES } from '../data/categories.data';
import { Category } from '../models/category.model';
import { ToolCategory } from '../models/tool-category.type';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private readonly categories: readonly Category[] = CATEGORIES;

  getCategories(): readonly Category[] {
    return this.categories;
  }

  getCategoryById(id: string): Category | undefined {
    return this.categories.find(
      category => category.id === id
    );
  }

  getCategoryByName(
    name: ToolCategory
  ): Category | undefined {
    return this.categories.find(
      category => category.name === name
    );
  }

  getCategoryCount(): number {
    return this.categories.length;
  }

}