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
    path: 'duplicate-line-remover',
    loadComponent: () =>
      import('./implementations/text/duplicate-line-remover/duplicate-line-remover')
        .then(m => m.DuplicateLineRemover),
    title: 'Duplicate Line Remover | Developer Productivity Suite'
  },
  {
  path: 'line-sorter',
  loadComponent: () =>
    import('./implementations/text/line-sorter/line-sorter')
      .then(m => m.LineSorter),
  title: 'Line Sorter | Developer Productivity Suite'
},
  {
    path: '',
    loadComponent: () =>
      import('./pages/tools/tools')
        .then(m => m.Tools),
    title: 'Tools | Developer Productivity Suite'
  }
];