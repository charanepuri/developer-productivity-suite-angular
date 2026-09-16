import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-grid-generator',
  imports: [FormsModule, NgStyle],
  templateUrl: './grid-generator.html',
  styleUrl: './grid-generator.css'
})
export class GridGenerator {
  columns = 3;
  rows = 3;
  gap = 12;

  get gridStyle(): Record<string, string> {
    return {
      display: 'grid',
      'grid-template-columns': `repeat(${this.columns}, 1fr)`,
      'grid-template-rows': `repeat(${this.rows}, 1fr)`,
      gap: `${this.gap}px`
    };
  }

  get itemCount(): number {
    return this.columns * this.rows;
  }

  get cssCode(): string {
    return `.grid {
  display: grid;
  grid-template-columns: repeat(${this.columns}, 1fr);
  grid-template-rows: repeat(${this.rows}, 1fr);
  gap: ${this.gap}px;
}`;
  }

  async copy(): Promise<void> {
    await navigator.clipboard.writeText(this.cssCode);
  }

  reset(): void {
    this.columns = 3;
    this.rows = 3;
    this.gap = 12;
  }
}