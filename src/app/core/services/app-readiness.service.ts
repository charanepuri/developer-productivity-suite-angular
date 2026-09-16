import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppReadinessService {

  private readonly readySubject =
    new BehaviorSubject<boolean>(false);

  readonly ready$ =
    this.readySubject.asObservable();

  markReady(): void {
    this.readySubject.next(true);
  }

  isReady(): boolean {
    return this.readySubject.value;
  }
}