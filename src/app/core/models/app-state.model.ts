import { Tool } from './tool.model';
import { Category } from './category.model';

export interface AppState {
  tools: Tool[];
  categories: Category[];
  favorites: string[];
  recentTools: string[];
  searchQuery: string;
  darkMode: boolean;
}