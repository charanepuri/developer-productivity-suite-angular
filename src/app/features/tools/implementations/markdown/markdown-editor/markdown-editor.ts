import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { markdownToHtml } from '../markdown-utils';

@Component({
  selector: 'app-markdown-editor',
  imports: [FormsModule],
  templateUrl: './markdown-editor.html',
  styleUrl: './markdown-editor.css'
})
export class MarkdownEditor {
  markdown = `# Developer Productivity Suite

## Markdown Editor

Write **Markdown** and preview the result instantly.

### Features

- Headings
- Bold text
- Italic text
- Lists
- Links
- Inline code
`;

  get html(): string {
    return markdownToHtml(this.markdown);
  }

  async copyMarkdown(): Promise<void> {
    await navigator.clipboard.writeText(this.markdown);
  }

  async copyHtml(): Promise<void> {
    await navigator.clipboard.writeText(this.html);
  }

  clear(): void {
    this.markdown = '';
  }

  loadSample(): void {
    this.markdown = `# Sample Markdown

## Introduction

This is a **sample Markdown document**.

### Features

- Easy to use
- Fast preview
- Developer friendly

> Build better software with better tools.

Visit [Angular](https://angular.dev) to learn more.
`;
  }
}