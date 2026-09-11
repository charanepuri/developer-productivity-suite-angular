import { Injectable } from '@angular/core';

import { TOOLS } from '../data/tools.data';
import { Tool } from '../models/tool.model';
import { ToolCategory } from '../models/tool-category.type';

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

  getToolsByCategory(category: ToolCategory): readonly Tool[] {
    return this.tools.filter(
      tool => tool.category === category
    );
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