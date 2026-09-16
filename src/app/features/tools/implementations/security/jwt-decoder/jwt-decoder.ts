import { Component } from '@angular/core';
import { JsonPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface JwtDecodedPart {
  valid: boolean;
  data: unknown;
  error: string;
}

@Component({
  selector: 'app-jwt-decoder',
  imports: [FormsModule, JsonPipe],
  templateUrl: './jwt-decoder.html',
  styleUrl: '../security-tool-shared.css'
})
export class JwtDecoder {
  token = '';

  get parts(): string[] {
    return this.token.trim().split('.');
  }

  get header(): JwtDecodedPart {
    return this.decodePart(
      this.parts[0] ?? ''
    );
  }

  get payload(): JwtDecodedPart {
    return this.decodePart(
      this.parts[1] ?? ''
    );
  }

  get signature(): string {
    return this.parts[2] ?? '';
  }

  get isStructureValid(): boolean {
    return this.parts.length === 3;
  }

  clear(): void {
    this.token = '';
  }

  private decodePart(
    part: string
  ): JwtDecodedPart {
    if (!part) {
      return {
        valid: false,
        data: null,
        error: 'JWT part is missing.'
      };
    }

    try {
      const decoded = this.base64UrlDecode(part);

      return {
        valid: true,
        data: JSON.parse(decoded),
        error: ''
      };
    } catch {
      return {
        valid: false,
        data: null,
        error: 'Unable to decode JWT part.'
      };
    }
  }

  private base64UrlDecode(
    value: string
  ): string {
    let base64 = value
      .replace(/-/g, '+')
      .replace(/_/g, '/');

    while (base64.length % 4 !== 0) {
      base64 += '=';
    }

    const binary = atob(base64);

    const bytes = Uint8Array.from(
      binary,
      character => character.charCodeAt(0)
    );

    return new TextDecoder().decode(bytes);
  }
}