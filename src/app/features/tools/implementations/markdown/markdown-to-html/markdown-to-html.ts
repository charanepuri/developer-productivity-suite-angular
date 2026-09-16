import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { markdownToHtml } from '../markdown-utils';

@Component({
  selector: 'app-markdown-to-html',
  imports: [FormsModule],
  templateUrl: './markdown-to-html.html',
  styleUrl: './markdown-to-html.css'
})
export class MarkdownToHtml {
  markdown = `# Hello World

This is **Markdown** converted to HTML.

## Features

- Headings
- Lists
- Bold text
- Links
`;

  get html(): string {
    return markdownToHtml(this.markdown);
  }

  async copy(): Promise<void> {
    await navigator.clipboard.writeText(this.html);
  }

  clear(): void {
    this.markdown = '';
  }
}