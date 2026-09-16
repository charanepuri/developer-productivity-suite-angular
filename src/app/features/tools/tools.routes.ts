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
  path: 'slug-generator',
  loadComponent: () =>
    import('./implementations/text/slug-generator/slug-generator')
      .then(m => m.SlugGenerator),
  title: 'Slug Generator | Developer Productivity Suite'
},
{
  path: 'text-reverser',
  loadComponent: () =>
    import('./implementations/text/text-reverser/text-reverser')
      .then(m => m.TextReverser),
  title: 'Text Reverser | Developer Productivity Suite'
},
{
  path: 'json-formatter',
  loadComponent: () =>
    import('./implementations/json/json-formatter/json-formatter')
      .then(m => m.JsonFormatter),
  title: 'JSON Formatter | Developer Productivity Suite'
},
{
  path: 'json-validator',
  loadComponent: () =>
    import('./implementations/json/json-validator/json-validator')
      .then(m => m.JsonValidator),
  title: 'JSON Validator | Developer Productivity Suite'
},
{
  path: 'json-minifier',
  loadComponent: () =>
    import('./implementations/json/json-minifier/json-minifier')
      .then(m => m.JsonMinifier),
  title: 'JSON Minifier | Developer Productivity Suite'
},
{
  path: 'json-to-csv',
  loadComponent: () =>
    import('./implementations/json/json-to-csv/json-to-csv')
      .then(m => m.JsonToCsv),
  title: 'JSON to CSV | Developer Productivity Suite'
},
{
  path: 'json-tree-viewer',
  loadComponent: () =>
    import('./implementations/json/json-tree-viewer/json-tree-viewer')
      .then(m => m.JsonTreeViewer),
  title: 'JSON Tree Viewer | Developer Productivity Suite'
},
{
  path: 'json-key-extractor',
  loadComponent: () =>
    import('./implementations/json/json-key-extractor/json-key-extractor')
      .then(m => m.JsonKeyExtractor),
  title: 'JSON Key Extractor | Developer Productivity Suite'
},
  {
    path: '',
    loadComponent: () =>
      import('./pages/tools/tools')
        .then(m => m.Tools),
    title: 'Tools | Developer Productivity Suite'
  }
];