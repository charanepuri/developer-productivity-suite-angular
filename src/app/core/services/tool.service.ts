import { Injectable } from '@angular/core';

import { Tool } from '../models/tool.model';

@Injectable({
  providedIn: 'root'
})
export class ToolService {

  private readonly tools: Tool[] = [];

  getTools(): Tool[] {
    return this.tools;
  }

  getToolById(id: string): Tool | undefined {
    return this.tools.find(tool => tool.id === id);
  }

}