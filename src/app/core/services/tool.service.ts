import { Injectable } from '@angular/core';

import { Tool } from '../models/tool.model';
import { ToolCategory } from '../models/tool-category.type';
import { TOOLS } from '../data/tools.data';

@Injectable({
  providedIn: 'root'
})
export class ToolService {

  private readonly tools: readonly Tool[] = TOOLS;

  getTools(): readonly Tool[] {
    return this.tools;
  }

  getToolById(id: string): Tool | undefined {
    return this.tools.find(tool => tool.id === id);
  }

  getToolsByCategory(
    category: ToolCategory
  ): readonly Tool[] {
    return this.tools.filter(
      tool => tool.category === category
    );
  }

  searchTools(query: string): readonly Tool[] {
    const normalizedQuery = query.trim().toLowerCase();

    if (!normalizedQuery) {
      return this.tools;
    }

    return this.tools.filter(tool => {
      const searchableText = [
        tool.name,
        tool.description,
        tool.category,
        ...tool.tags
      ]
        .join(' ')
        .toLowerCase();

      return searchableText.includes(normalizedQuery);
    });
  }

  getToolCount(): number {
    return this.tools.length;
  }

  getCategoryCount(): number {
    return new Set(
      this.tools.map(tool => tool.category)
    ).size;
  }
}