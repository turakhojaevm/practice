import { Component } from '@angular/core';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [
    DatePipe
  ],
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'practice';
  value = 0;
  updatedAt = new Date();

  get disabled(): boolean {
    return this.value <= 0;
  }

  increment(): void {
    this.value++;
    this.updatedAt = new Date();
  }

  decrement(): void {
    this.value--;
    this.updatedAt = new Date();
  }

  reset(): void {
    this.value = 0;
    this.updatedAt = new Date();
  }
}
