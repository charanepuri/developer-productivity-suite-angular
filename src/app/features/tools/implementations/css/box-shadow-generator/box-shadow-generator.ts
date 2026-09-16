import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-box-shadow-generator',
  imports: [FormsModule],
  templateUrl: './box-shadow-generator.html',
  styleUrl: './box-shadow-generator.css'
})
export class BoxShadowGenerator {
  offsetX = 10;
  offsetY = 10;
  blur = 20;
  spread = 0;
  opacity = 0.25;
  shadowColor = '#000000';
  inset = false;

  get shadowColorRgba(): string {
    const hex = this.shadowColor.replace('#', '');

    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);

    return `rgba(${r}, ${g}, ${b}, ${this.opacity})`;
  }

  get boxShadow(): string {
    const inset = this.inset ? 'inset ' : '';

    return `${inset}${this.offsetX}px ${this.offsetY}px ${this.blur}px ${this.spread}px ${this.shadowColorRgba}`;
  }

  get cssCode(): string {
    return `.box {
  box-shadow: ${this.boxShadow};
}`;
  }

  async copy(): Promise<void> {
    await navigator.clipboard.writeText(this.cssCode);
  }

  reset(): void {
    this.offsetX = 10;
    this.offsetY = 10;
    this.blur = 20;
    this.spread = 0;
    this.opacity = 0.25;
    this.shadowColor = '#000000';
    this.inset = false;
  }
}