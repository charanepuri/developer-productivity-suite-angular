import { Routes } from '@angular/router';

const loadToolsPage = () =>
  import('./pages/tools/tools')
    .then(m => m.Tools);

export const TOOLS_ROUTES: Routes = [
  /*
   * ============================================================
   * TOOLS LANDING PAGE
   * /tools
   * ============================================================
   */
  {
    path: '',
    loadComponent: loadToolsPage,
    title: 'Tools | Developer Productivity Suite'
  },

  /*
   * ============================================================
   * TEXT TOOLS
   * /tools/text
   * ============================================================
   */
  {
    path: 'text',
    children: [
      {
        path: '',
        loadComponent: loadToolsPage,
        title: 'Text Tools | Developer Productivity Suite'
      },
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
        path: 'remove-duplicates',
        loadComponent: () =>
          import('./implementations/text/duplicate-line-remover/duplicate-line-remover')
            .then(m => m.DuplicateLineRemover),
        title: 'Duplicate Line Remover | Developer Productivity Suite'
      },
      {
        path: 'sort-lines',
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
        path: 'reverse',
        loadComponent: () =>
          import('./implementations/text/text-reverser/text-reverser')
            .then(m => m.TextReverser),
        title: 'Text Reverser | Developer Productivity Suite'
      }
    ]
  },

  /*
   * ============================================================
   * JSON TOOLS
   * /tools/json
   * ============================================================
   */
  {
    path: 'json',
    children: [
      {
        path: '',
        loadComponent: loadToolsPage,
        title: 'JSON Tools | Developer Productivity Suite'
      },
      {
        path: 'formatter',
        loadComponent: () =>
          import('./implementations/json/json-formatter/json-formatter')
            .then(m => m.JsonFormatter),
        title: 'JSON Formatter | Developer Productivity Suite'
      },
      {
        path: 'validator',
        loadComponent: () =>
          import('./implementations/json/json-validator/json-validator')
            .then(m => m.JsonValidator),
        title: 'JSON Validator | Developer Productivity Suite'
      },
      {
        path: 'minifier',
        loadComponent: () =>
          import('./implementations/json/json-minifier/json-minifier')
            .then(m => m.JsonMinifier),
        title: 'JSON Minifier | Developer Productivity Suite'
      },
      {
        path: 'to-csv',
        loadComponent: () =>
          import('./implementations/json/json-to-csv/json-to-csv')
            .then(m => m.JsonToCsv),
        title: 'JSON to CSV | Developer Productivity Suite'
      },
      {
        path: 'tree-viewer',
        loadComponent: () =>
          import('./implementations/json/json-tree-viewer/json-tree-viewer')
            .then(m => m.JsonTreeViewer),
        title: 'JSON Tree Viewer | Developer Productivity Suite'
      },
      {
        path: 'key-extractor',
        loadComponent: () =>
          import('./implementations/json/json-key-extractor/json-key-extractor')
            .then(m => m.JsonKeyExtractor),
        title: 'JSON Key Extractor | Developer Productivity Suite'
      }
    ]
  },

  /*
   * ============================================================
   * SECURITY TOOLS
   * /tools/security
   * ============================================================
   */
  {
    path: 'security',
    children: [
      {
        path: '',
        loadComponent: loadToolsPage,
        title: 'Security Tools | Developer Productivity Suite'
      },
      {
        path: 'base64',
        loadComponent: () =>
          import('./implementations/security/base64-tool/base64-tool')
            .then(m => m.Base64Tool),
        title: 'Base64 Encoder / Decoder | Developer Productivity Suite'
      },
      {
        path: 'url-encoder',
        loadComponent: () =>
          import('./implementations/security/url-encoder/url-encoder')
            .then(m => m.UrlEncoder),
        title: 'URL Encoder / Decoder | Developer Productivity Suite'
      },
      {
        path: 'hash-generator',
        loadComponent: () =>
          import('./implementations/security/hash-generator/hash-generator')
            .then(m => m.HashGenerator),
        title: 'Hash Generator | Developer Productivity Suite'
      },
      {
        path: 'password-generator',
        loadComponent: () =>
          import('./implementations/security/password-generator/password-generator')
            .then(m => m.PasswordGenerator),
        title: 'Password Generator | Developer Productivity Suite'
      },
      {
        path: 'uuid-generator',
        loadComponent: () =>
          import('./implementations/security/uuid-generator/uuid-generator')
            .then(m => m.UuidGenerator),
        title: 'UUID Generator | Developer Productivity Suite'
      },
      {
        path: 'jwt-decoder',
        loadComponent: () =>
          import('./implementations/security/jwt-decoder/jwt-decoder')
            .then(m => m.JwtDecoder),
        title: 'JWT Decoder | Developer Productivity Suite'
      }
    ]
  },

  /*
   * ============================================================
   * CSS TOOLS
   * /tools/css
   * ============================================================
   */
  {
    path: 'css',
    children: [
      {
        path: '',
        loadComponent: loadToolsPage,
        title: 'CSS Tools | Developer Productivity Suite'
      },
      {
        path: 'box-shadow',
        loadComponent: () =>
          import('./implementations/css/box-shadow-generator/box-shadow-generator')
            .then(m => m.BoxShadowGenerator),
        title: 'Box Shadow Generator | Developer Productivity Suite'
      },
      {
        path: 'gradient',
        loadComponent: () =>
          import('./implementations/css/gradient-generator/gradient-generator')
            .then(m => m.GradientGenerator),
        title: 'Gradient Generator | Developer Productivity Suite'
      },
      {
        path: 'border-radius',
        loadComponent: () =>
          import('./implementations/css/border-radius-generator/border-radius-generator')
            .then(m => m.BorderRadiusGenerator),
        title: 'Border Radius Generator | Developer Productivity Suite'
      },
      {
        path: 'flexbox',
        loadComponent: () =>
          import('./implementations/css/flexbox-generator/flexbox-generator')
            .then(m => m.FlexboxGenerator),
        title: 'Flexbox Generator | Developer Productivity Suite'
      },
      {
        path: 'grid',
        loadComponent: () =>
          import('./implementations/css/grid-generator/grid-generator')
            .then(m => m.GridGenerator),
        title: 'Grid Generator | Developer Productivity Suite'
      }
    ]
  },

  /*
   * ============================================================
   * COLOR TOOLS
   * /tools/color
   * ============================================================
   */
  {
    path: 'color',
    children: [
      {
        path: '',
        loadComponent: loadToolsPage,
        title: 'Color Tools | Developer Productivity Suite'
      },
      {
        path: 'picker',
        loadComponent: () =>
          import('./implementations/color/color-picker/color-picker')
            .then(m => m.ColorPicker),
        title: 'Color Picker | Developer Productivity Suite'
      },
      {
        path: 'converter',
        loadComponent: () =>
          import('./implementations/color/color-converter/color-converter')
            .then(m => m.ColorConverter),
        title: 'Color Converter | Developer Productivity Suite'
      },
      {
        path: 'palette',
        loadComponent: () =>
          import('./implementations/color/color-palette-generator/color-palette-generator')
            .then(m => m.ColorPaletteGenerator),
        title: 'Color Palette Generator | Developer Productivity Suite'
      },
      {
        path: 'contrast',
        loadComponent: () =>
          import('./implementations/color/contrast-checker/contrast-checker')
            .then(m => m.ContrastChecker),
        title: 'Contrast Checker | Developer Productivity Suite'
      },
      {
        path: 'shades',
        loadComponent: () =>
          import('./implementations/color/shade-tint-generator/shade-tint-generator')
            .then(m => m.ShadeTintGenerator),
        title: 'Shade & Tint Generator | Developer Productivity Suite'
      }
    ]
  },

  /*
   * ============================================================
   * MARKDOWN TOOLS
   * /tools/markdown
   * ============================================================
   */
  {
    path: 'markdown',
    children: [
      {
        path: '',
        loadComponent: loadToolsPage,
        title: 'Markdown Tools | Developer Productivity Suite'
      },
      {
        path: 'editor',
        loadComponent: () =>
          import('./implementations/markdown/markdown-editor/markdown-editor')
            .then(m => m.MarkdownEditor),
        title: 'Markdown Editor | Developer Productivity Suite'
      },
      {
        path: 'to-html',
        loadComponent: () =>
          import('./implementations/markdown/markdown-to-html/markdown-to-html')
            .then(m => m.MarkdownToHtml),
        title: 'Markdown to HTML | Developer Productivity Suite'
      },
      {
        path: 'table',
        loadComponent: () =>
          import('./implementations/markdown/markdown-table-generator/markdown-table-generator')
            .then(m => m.MarkdownTableGenerator),
        title: 'Markdown Table Generator | Developer Productivity Suite'
      },
      {
        path: 'toc',
        loadComponent: () =>
          import('./implementations/markdown/markdown-toc-generator/markdown-toc-generator')
            .then(m => m.MarkdownTocGenerator),
        title: 'Markdown TOC Generator | Developer Productivity Suite'
      }
    ]
  },

  /*
   * ============================================================
   * DEVELOPER TOOLS
   * /tools/developer
   * ============================================================
   */
  {
    path: 'developer',
    children: [
      {
        path: '',
        loadComponent: loadToolsPage,
        title: 'Developer Tools | Developer Productivity Suite'
      },
      {
        path: 'regex-tester',
        loadComponent: () =>
          import('./implementations/developer/regex-tester/regex-tester')
            .then(m => m.RegexTester),
        title: 'Regex Tester | Developer Productivity Suite'
      },
      {
        path: 'timestamp-converter',
        loadComponent: () =>
          import('./implementations/developer/timestamp-converter/timestamp-converter')
            .then(m => m.TimestampConverter),
        title: 'Timestamp Converter | Developer Productivity Suite'
      },
      {
        path: 'http-status',
        loadComponent: () =>
          import('./implementations/developer/http-status-code-lookup/http-status-code-lookup')
            .then(m => m.HttpStatusCodeLookup),
        title: 'HTTP Status Code Lookup | Developer Productivity Suite'
      },
      {
        path: 'cron-parser',
        loadComponent: () =>
          import('./implementations/developer/cron-expression-helper/cron-expression-helper')
            .then(m => m.CronExpressionHelper),
        title: 'Cron Expression Helper | Developer Productivity Suite'
      },
      {
        path: 'query-string',
        loadComponent: () =>
          import('./implementations/developer/query-string-builder/query-string-builder')
            .then(m => m.QueryStringBuilder),
        title: 'Query String Builder | Developer Productivity Suite'
      }
    ]
  },

  /*
   * ============================================================
   * DATE & TIME TOOLS
   * /tools/date-time
   * ============================================================
   */
  {
    path: 'date-time',
    children: [
      {
        path: '',
        loadComponent: loadToolsPage,
        title: 'Date & Time Tools | Developer Productivity Suite'
      },
      {
        path: 'difference',
        loadComponent: () =>
          import(
            './implementations/datetime/date-difference-calculator/date-difference-calculator'
          ).then(m => m.DateDifferenceCalculator),
        title: 'Date Difference Calculator | Developer Productivity Suite'
      },
      {
        path: 'timezone',
        loadComponent: () =>
          import(
            './implementations/datetime/timezone-converter/timezone-converter'
          ).then(m => m.TimezoneConverter),
        title: 'Timezone Converter | Developer Productivity Suite'
      },
      {
        path: 'age',
        loadComponent: () =>
          import(
            './implementations/datetime/age-calculator/age-calculator'
          ).then(m => m.AgeCalculator),
        title: 'Age Calculator | Developer Productivity Suite'
      }
    ]
  }
];