import { ToolCategory } from './tool-category.type';

export interface Tool {
  id: string;
  name: string;
  description: string;
  category: ToolCategory;
  icon: string;
  route: string;
  tags: string[];
  isFavorite: boolean;
}