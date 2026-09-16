import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-markdown-table-generator',
  imports: [FormsModule],
  templateUrl: './markdown-table-generator.html',
  styleUrl: './markdown-table-generator.css'
})
export class MarkdownTableGenerator {
  columns = 3;
  rows = 3;

  headers: string[] = [
    'Name',
    'Technology',
    'Status'
  ];

  data: string[][] = [
    ['Developer Productivity Suite', 'Angular', 'Active'],
    ['Tech Glossary Hub', 'React', 'Active'],
    ['Bible Reference App', 'Angular', 'Active']
  ];

  constructor() {
    this.resizeTable();
  }

  resizeTable(): void {
    this.columns = Math.max(1, Math.min(8, Number(this.columns)));
    this.rows = Math.max(1, Math.min(15, Number(this.rows)));

    while (this.headers.length < this.columns) {
      this.headers.push(`Column ${this.headers.length + 1}`);
    }

    this.headers = this.headers.slice(0, this.columns);

    while (this.data.length < this.rows) {
      this.data.push(
        Array.from(
          { length: this.columns },
          () => ''
        )
      );
    }

    this.data = this.data
      .slice(0, this.rows)
      .map(row => {
        while (row.length < this.columns) {
          row.push('');
        }

        return row.slice(0, this.columns);
      });
  }

  get markdown(): string {
    const header = `| ${this.headers.join(' | ')} |`;

    const separator =
      `| ${this.headers.map(() => '---').join(' | ')} |`;

    const rows = this.data.map(
      row => `| ${row.join(' | ')} |`
    );

    return [
      header,
      separator,
      ...rows
    ].join('\n');
  }

  async copy(): Promise<void> {
    await navigator.clipboard.writeText(this.markdown);
  }

  reset(): void {
    this.columns = 3;
    this.rows = 3;

    this.headers = [
      'Name',
      'Technology',
      'Status'
    ];

    this.data = [
      ['Developer Productivity Suite', 'Angular', 'Active'],
      ['Tech Glossary Hub', 'React', 'Active'],
      ['Bible Reference App', 'Angular', 'Active']
    ];

    this.resizeTable();
  }
}