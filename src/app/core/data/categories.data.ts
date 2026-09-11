import { Category } from '../models/category.model';

export const CATEGORIES: readonly Category[] = [

  {
    id: 'text-tools',
    name: 'Text Tools',
    description: 'Utilities for formatting, transforming, and analyzing text.',
    icon: 'Aa',
    toolCount: 6,
    route: '/tools/text'
  },

  {
    id: 'json-tools',
    name: 'JSON Tools',
    description: 'Tools for formatting, validating, converting, and inspecting JSON.',
    icon: '{}',
    toolCount: 6,
    route: '/tools/json'
  },

  {
    id: 'security-tools',
    name: 'Security Tools',
    description: 'Developer utilities for common security and encoding tasks.',
    icon: '🔐',
    toolCount: 6,
    route: '/tools/security'
  },

  {
    id: 'css-tools',
    name: 'CSS Tools',
    description: 'Utilities for generating and working with CSS.',
    icon: '#',
    toolCount: 5,
    route: '/tools/css'
  },

  {
    id: 'color-tools',
    name: 'Color Tools',
    description: 'Utilities for color conversion, inspection, and generation.',
    icon: '◉',
    toolCount: 5,
    route: '/tools/color'
  },

  {
    id: 'markdown-tools',
    name: 'Markdown Tools',
    description: 'Utilities for creating and transforming Markdown content.',
    icon: 'M',
    toolCount: 4,
    route: '/tools/markdown'
  },

  {
    id: 'developer-tools',
    name: 'Developer Tools',
    description: 'General-purpose utilities for everyday development workflows.',
    icon: '</>',
    toolCount: 5,
    route: '/tools/developer'
  },

  {
    id: 'date-time-tools',
    name: 'Date & Time Tools',
    description: 'Utilities for working with dates, times, and timestamps.',
    icon: '◷',
    toolCount: 3,
    route: '/tools/date-time'
  }

];