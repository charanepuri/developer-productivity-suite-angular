import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-border-radius-generator',
  imports: [FormsModule],
  templateUrl: './border-radius-generator.html',
  styleUrl: './border-radius-generator.css'
})
export class BorderRadiusGenerator {
  topLeft = 20;
  topRight = 20;
  bottomRight = 20;
  bottomLeft = 20;

  get borderRadius(): string {
    return `${this.topLeft}px ${this.topRight}px ${this.bottomRight}px ${this.bottomLeft}px`;
  }

  get cssCode(): string {
    return `.box {
  border-radius: ${this.borderRadius};
}`;
  }

  async copy(): Promise<void> {
    await navigator.clipboard.writeText(this.cssCode);
  }

  reset(): void {
    this.topLeft = 20;
    this.topRight = 20;
    this.bottomRight = 20;
    this.bottomLeft = 20;
  }
}