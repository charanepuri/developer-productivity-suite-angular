import { Component } from '@angular/core';

@Component({
  selector: 'app-uuid-generator',
  templateUrl: './uuid-generator.html',
  styleUrl: '../security-tool-shared.css'
})
export class UuidGenerator {
  uuid = '';

  generate(): void {
    this.uuid = crypto.randomUUID();
  }

  async copyUuid(): Promise<void> {
    if (!this.uuid) {
      return;
    }

    await navigator.clipboard.writeText(
      this.uuid
    );
  }
}