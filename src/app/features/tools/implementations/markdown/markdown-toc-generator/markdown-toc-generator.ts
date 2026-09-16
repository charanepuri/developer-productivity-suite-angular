import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import {
  extractHeadings,
  MarkdownHeading
} from '../markdown-utils';

@Component({
  selector: 'app-markdown-toc-generator',
  imports: [FormsModule],
  templateUrl: './markdown-toc-generator.html',
  styleUrl: './markdown-toc-generator.css'
})
export class MarkdownTocGenerator {
  markdown = `# Developer Productivity Suite

## Introduction

### Features

### Architecture

## Installation

### Requirements

### Setup

## Deployment

### Production Build

## Conclusion
`;

  get headings(): MarkdownHeading[] {
    return extractHeadings(this.markdown);
  }

  get toc(): string {
    return this.headings
      .map(heading => {
        const indentation =
          '  '.repeat(Math.max(0, heading.level - 1));

        return `${indentation}- [${heading.text}](#${heading.slug})`;
      })
      .join('\n');
  }

  async copy(): Promise<void> {
    await navigator.clipboard.writeText(this.toc);
  }

  clear(): void {
    this.markdown = '';
  }

  loadSample(): void {
    this.markdown = `# Developer Productivity Suite

## Introduction

### Project Goals

### Features

## Architecture

### Core

### Shared

### Features

## Testing

### Unit Testing

### Production Testing

## Deployment
`;
  }
}