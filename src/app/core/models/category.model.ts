import { ToolCategory } from './tool-category.type';

export interface Category {
  id: string;
  name: ToolCategory;
  description: string;
  icon: string;
  toolCount: number;
  route: string;
}