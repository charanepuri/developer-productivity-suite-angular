import { NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

type FlexDirection = 'row' | 'row-reverse' | 'column' | 'column-reverse';
type JustifyContent =
  | 'flex-start'
  | 'center'
  | 'flex-end'
  | 'space-between'
  | 'space-around'
  | 'space-evenly';

type AlignItems =
  | 'stretch'
  | 'flex-start'
  | 'center'
  | 'flex-end'
  | 'baseline';

@Component({
  selector: 'app-flexbox-generator',
  imports: [FormsModule, NgStyle],
  templateUrl: './flexbox-generator.html',
  styleUrl: './flexbox-generator.css'
})
export class FlexboxGenerator {
  direction: FlexDirection = 'row';
  justify: JustifyContent = 'center';
  align: AlignItems = 'center';
  gap = 16;
  wrap = true;

  readonly items = [1, 2, 3];

  get flexStyle(): Record<string, string> {
    return {
      display: 'flex',
      'flex-direction': this.direction,
      'justify-content': this.justify,
      'align-items': this.align,
      gap: `${this.gap}px`,
      'flex-wrap': this.wrap ? 'wrap' : 'nowrap'
    };
  }

  get cssCode(): string {
    return `.container {
  display: flex;
  flex-direction: ${this.direction};
  justify-content: ${this.justify};
  align-items: ${this.align};
  gap: ${this.gap}px;
  flex-wrap: ${this.wrap ? 'wrap' : 'nowrap'};
}`;
  }

  async copy(): Promise<void> {
    await navigator.clipboard.writeText(this.cssCode);
  }

  reset(): void {
    this.direction = 'row';
    this.justify = 'center';
    this.align = 'center';
    this.gap = 16;
    this.wrap = true;
  }
}