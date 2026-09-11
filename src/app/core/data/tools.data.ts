import { Tool } from '../models/tool.model';

export const TOOLS: readonly Tool[] = [

  // ─────────────────────────────────────
  // TEXT TOOLS — 6
  // ─────────────────────────────────────

  {
    id: 'text-case-converter',
    name: 'Case Converter',
    description: 'Convert text between common letter casing formats.',
    category: 'Text Tools',
    icon: 'Aa',
    route: '/tools/text/case-converter',
    tags: ['text', 'case', 'uppercase', 'lowercase']
  },

  {
    id: 'text-word-counter',
    name: 'Word Counter',
    description: 'Count words, characters, sentences, and lines in text.',
    category: 'Text Tools',
    icon: '123',
    route: '/tools/text/word-counter',
    tags: ['text', 'words', 'characters', 'counter']
  },

  {
    id: 'text-remove-duplicates',
    name: 'Duplicate Line Remover',
    description: 'Remove duplicate lines from a block of text.',
    category: 'Text Tools',
    icon: '≠',
    route: '/tools/text/remove-duplicates',
    tags: ['text', 'duplicates', 'lines', 'cleanup']
  },

  {
    id: 'text-sort-lines',
    name: 'Line Sorter',
    description: 'Sort lines of text alphabetically or numerically.',
    category: 'Text Tools',
    icon: '↕',
    route: '/tools/text/sort-lines',
    tags: ['text', 'sort', 'lines', 'alphabetical']
  },

  {
    id: 'text-slug-generator',
    name: 'Slug Generator',
    description: 'Convert text into clean URL-friendly slugs.',
    category: 'Text Tools',
    icon: '🔗',
    route: '/tools/text/slug-generator',
    tags: ['text', 'slug', 'url', 'seo']
  },

  {
    id: 'text-reverse',
    name: 'Text Reverser',
    description: 'Reverse characters or words in a text string.',
    category: 'Text Tools',
    icon: '↔',
    route: '/tools/text/reverse',
    tags: ['text', 'reverse', 'string']
  },


  // ─────────────────────────────────────
  // JSON TOOLS — 6
  // ─────────────────────────────────────

  {
    id: 'json-formatter',
    name: 'JSON Formatter',
    description: 'Format and beautify JSON data for easier reading.',
    category: 'JSON Tools',
    icon: '{}',
    route: '/tools/json/formatter',
    tags: ['json', 'format', 'beautify']
  },

  {
    id: 'json-validator',
    name: 'JSON Validator',
    description: 'Validate JSON syntax and identify malformed data.',
    category: 'JSON Tools',
    icon: '✓',
    route: '/tools/json/validator',
    tags: ['json', 'validate', 'syntax']
  },

  {
    id: 'json-minifier',
    name: 'JSON Minifier',
    description: 'Minify JSON by removing unnecessary whitespace.',
    category: 'JSON Tools',
    icon: '↓',
    route: '/tools/json/minifier',
    tags: ['json', 'minify', 'compress']
  },

  {
    id: 'json-to-csv',
    name: 'JSON to CSV',
    description: 'Convert compatible JSON arrays into CSV format.',
    category: 'JSON Tools',
    icon: '⇄',
    route: '/tools/json/to-csv',
    tags: ['json', 'csv', 'convert']
  },

  {
    id: 'json-tree-viewer',
    name: 'JSON Tree Viewer',
    description: 'Explore JSON structures in a readable tree format.',
    category: 'JSON Tools',
    icon: '⌘',
    route: '/tools/json/tree-viewer',
    tags: ['json', 'tree', 'viewer']
  },

  {
    id: 'json-key-extractor',
    name: 'JSON Key Extractor',
    description: 'Extract keys from JSON objects and nested structures.',
    category: 'JSON Tools',
    icon: 'K',
    route: '/tools/json/key-extractor',
    tags: ['json', 'keys', 'extract']
  },


  // ─────────────────────────────────────
  // SECURITY TOOLS — 6
  // ─────────────────────────────────────

  {
    id: 'security-base64',
    name: 'Base64 Encoder / Decoder',
    description: 'Encode and decode Base64 text directly in your browser.',
    category: 'Security Tools',
    icon: '64',
    route: '/tools/security/base64',
    tags: ['security', 'base64', 'encode', 'decode']
  },

  {
    id: 'security-url-encoder',
    name: 'URL Encoder / Decoder',
    description: 'Encode or decode URL components safely.',
    category: 'Security Tools',
    icon: '%',
    route: '/tools/security/url-encoder',
    tags: ['security', 'url', 'encode', 'decode']
  },

  {
    id: 'security-hash-generator',
    name: 'Hash Generator',
    description: 'Generate common cryptographic hashes from input text.',
    category: 'Security Tools',
    icon: '#',
    route: '/tools/security/hash-generator',
    tags: ['security', 'hash', 'sha', 'crypto']
  },

  {
    id: 'security-password-generator',
    name: 'Password Generator',
    description: 'Generate strong random passwords with configurable options.',
    category: 'Security Tools',
    icon: '🔑',
    route: '/tools/security/password-generator',
    tags: ['security', 'password', 'random', 'generator']
  },

  {
    id: 'security-uuid-generator',
    name: 'UUID Generator',
    description: 'Generate universally unique identifiers.',
    category: 'Security Tools',
    icon: 'ID',
    route: '/tools/security/uuid-generator',
    tags: ['security', 'uuid', 'identifier']
  },

  {
    id: 'security-jwt-decoder',
    name: 'JWT Decoder',
    description: 'Decode and inspect the header and payload of a JWT.',
    category: 'Security Tools',
    icon: 'JWT',
    route: '/tools/security/jwt-decoder',
    tags: ['security', 'jwt', 'token', 'decode']
  },


  // ─────────────────────────────────────
  // CSS TOOLS — 5
  // ─────────────────────────────────────

  {
    id: 'css-box-shadow',
    name: 'Box Shadow Generator',
    description: 'Create CSS box-shadow values interactively.',
    category: 'CSS Tools',
    icon: '▣',
    route: '/tools/css/box-shadow',
    tags: ['css', 'shadow', 'generator']
  },

  {
    id: 'css-gradient',
    name: 'Gradient Generator',
    description: 'Generate CSS linear and radial gradients.',
    category: 'CSS Tools',
    icon: '◐',
    route: '/tools/css/gradient',
    tags: ['css', 'gradient', 'background']
  },

  {
    id: 'css-border-radius',
    name: 'Border Radius Generator',
    description: 'Generate CSS border-radius configurations.',
    category: 'CSS Tools',
    icon: '⌜',
    route: '/tools/css/border-radius',
    tags: ['css', 'border', 'radius']
  },

  {
    id: 'css-flexbox',
    name: 'Flexbox Generator',
    description: 'Build CSS Flexbox layouts interactively.',
    category: 'CSS Tools',
    icon: '↔',
    route: '/tools/css/flexbox',
    tags: ['css', 'flexbox', 'layout']
  },

  {
    id: 'css-grid',
    name: 'Grid Generator',
    description: 'Generate CSS Grid layouts and configurations.',
    category: 'CSS Tools',
    icon: '▦',
    route: '/tools/css/grid',
    tags: ['css', 'grid', 'layout']
  },


  // ─────────────────────────────────────
  // COLOR TOOLS — 5
  // ─────────────────────────────────────

  {
    id: 'color-picker',
    name: 'Color Picker',
    description: 'Select and inspect colors using a visual color picker.',
    category: 'Color Tools',
    icon: '◉',
    route: '/tools/color/picker',
    tags: ['color', 'picker', 'hex', 'rgb']
  },

  {
    id: 'color-converter',
    name: 'Color Converter',
    description: 'Convert colors between common color formats.',
    category: 'Color Tools',
    icon: '⇄',
    route: '/tools/color/converter',
    tags: ['color', 'convert', 'hex', 'rgb', 'hsl']
  },

  {
    id: 'color-palette',
    name: 'Color Palette Generator',
    description: 'Generate coordinated color palettes.',
    category: 'Color Tools',
    icon: '▤',
    route: '/tools/color/palette',
    tags: ['color', 'palette', 'design']
  },

  {
    id: 'color-contrast',
    name: 'Contrast Checker',
    description: 'Check contrast between foreground and background colors.',
    category: 'Color Tools',
    icon: '◑',
    route: '/tools/color/contrast',
    tags: ['color', 'contrast', 'accessibility', 'wcag']
  },

  {
    id: 'color-shades',
    name: 'Shade & Tint Generator',
    description: 'Generate shades and tints from a base color.',
    category: 'Color Tools',
    icon: '◒',
    route: '/tools/color/shades',
    tags: ['color', 'shade', 'tint']
  },


  // ─────────────────────────────────────
  // MARKDOWN TOOLS — 4
  // ─────────────────────────────────────

  {
    id: 'markdown-editor',
    name: 'Markdown Editor',
    description: 'Write and preview Markdown content.',
    category: 'Markdown Tools',
    icon: 'M',
    route: '/tools/markdown/editor',
    tags: ['markdown', 'editor', 'preview']
  },

  {
    id: 'markdown-to-html',
    name: 'Markdown to HTML',
    description: 'Convert Markdown content into HTML.',
    category: 'Markdown Tools',
    icon: '⇄',
    route: '/tools/markdown/to-html',
    tags: ['markdown', 'html', 'convert']
  },

  {
    id: 'markdown-table',
    name: 'Markdown Table Generator',
    description: 'Generate Markdown tables quickly and consistently.',
    category: 'Markdown Tools',
    icon: '▤',
    route: '/tools/markdown/table',
    tags: ['markdown', 'table', 'generator']
  },

  {
    id: 'markdown-toc',
    name: 'Markdown TOC Generator',
    description: 'Generate a table of contents from Markdown headings.',
    category: 'Markdown Tools',
    icon: '☷',
    route: '/tools/markdown/toc',
    tags: ['markdown', 'toc', 'headings']
  },


  // ─────────────────────────────────────
  // DEVELOPER TOOLS — 5
  // ─────────────────────────────────────

  {
    id: 'developer-regex-tester',
    name: 'Regex Tester',
    description: 'Test regular expressions against sample text.',
    category: 'Developer Tools',
    icon: '.*',
    route: '/tools/developer/regex-tester',
    tags: ['developer', 'regex', 'pattern']
  },

  {
    id: 'developer-timestamp-converter',
    name: 'Timestamp Converter',
    description: 'Convert Unix timestamps into readable dates and times.',
    category: 'Developer Tools',
    icon: 'TS',
    route: '/tools/developer/timestamp-converter',
    tags: ['developer', 'timestamp', 'unix', 'date']
  },

  {
    id: 'developer-http-status',
    name: 'HTTP Status Code Lookup',
    description: 'Look up HTTP status codes and their meanings.',
    category: 'Developer Tools',
    icon: 'HTTP',
    route: '/tools/developer/http-status',
    tags: ['developer', 'http', 'status', 'api']
  },

  {
    id: 'developer-cron-parser',
    name: 'Cron Expression Helper',
    description: 'Understand and build common Cron expressions.',
    category: 'Developer Tools',
    icon: 'CRON',
    route: '/tools/developer/cron-parser',
    tags: ['developer', 'cron', 'schedule']
  },

  {
    id: 'developer-query-string',
    name: 'Query String Builder',
    description: 'Build and inspect URL query strings.',
    category: 'Developer Tools',
    icon: '?',
    route: '/tools/developer/query-string',
    tags: ['developer', 'url', 'query', 'parameters']
  },


  // ─────────────────────────────────────
  // DATE & TIME TOOLS — 3
  // ─────────────────────────────────────

  {
    id: 'datetime-difference',
    name: 'Date Difference Calculator',
    description: 'Calculate the difference between two dates.',
    category: 'Date & Time Tools',
    icon: 'Δ',
    route: '/tools/date-time/difference',
    tags: ['date', 'time', 'difference', 'calculator']
  },

  {
    id: 'datetime-timezone',
    name: 'Timezone Converter',
    description: 'Convert date and time values between time zones.',
    category: 'Date & Time Tools',
    icon: 'TZ',
    route: '/tools/date-time/timezone',
    tags: ['date', 'time', 'timezone', 'convert']
  },

  {
    id: 'datetime-age',
    name: 'Age Calculator',
    description: 'Calculate age from a birth date.',
    category: 'Date & Time Tools',
    icon: 'AGE',
    route: '/tools/date-time/age',
    tags: ['date', 'age', 'calculator']
  }

];