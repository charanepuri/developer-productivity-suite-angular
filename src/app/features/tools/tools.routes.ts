import { Routes } from '@angular/router';

export const TOOLS_ROUTES: Routes = [
  {
    path: 'case-converter',
    loadComponent: () =>
      import('./implementations/text/case-converter/case-converter')
        .then(m => m.CaseConverter),
    title: 'Case Converter | Developer Productivity Suite'
  },
  {
    path: 'word-counter',
    loadComponent: () =>
      import('./implementations/text/word-counter/word-counter')
        .then(m => m.WordCounter),
    title: 'Word Counter | Developer Productivity Suite'
  },
  {
    path: '',
    loadComponent: () =>
      import('./pages/tools/tools')
        .then(m => m.Tools),
    title: 'Tools | Developer Productivity Suite'
  }
];