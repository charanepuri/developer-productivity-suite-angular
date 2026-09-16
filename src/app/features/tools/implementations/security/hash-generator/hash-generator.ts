import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

type HashAlgorithm =
  | 'SHA-1'
  | 'SHA-256'
  | 'SHA-384'
  | 'SHA-512';

@Component({
  selector: 'app-hash-generator',
  imports: [FormsModule],
  templateUrl: './hash-generator.html',
  styleUrl: '../security-tool-shared.css'
})
export class HashGenerator {
  inputText = '';

  algorithm: HashAlgorithm = 'SHA-256';

  readonly algorithms: HashAlgorithm[] = [
    'SHA-1',
    'SHA-256',
    'SHA-384',
    'SHA-512'
  ];

  hash = '';
  isGenerating = false;

  async generateHash(): Promise<void> {
    if (!this.inputText) {
      this.hash = '';
      return;
    }

    this.isGenerating = true;

    try {
      const data = new TextEncoder().encode(
        this.inputText
      );

      const buffer =
        await crypto.subtle.digest(
          this.algorithm,
          data
        );

      this.hash = Array.from(
        new Uint8Array(buffer)
      )
        .map(byte =>
          byte.toString(16).padStart(2, '0')
        )
        .join('');
    } finally {
      this.isGenerating = false;
    }
  }

  clear(): void {
    this.inputText = '';
    this.hash = '';
  }

  async copyHash(): Promise<void> {
    if (!this.hash) {
      return;
    }

    await navigator.clipboard.writeText(
      this.hash
    );
  }
}