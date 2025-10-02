import {Component, inject} from '@angular/core';
import {AsyncPipe, DatePipe} from '@angular/common';
import {Store} from '@ngrx/store';
import {countSelector, decrement, increment, reset} from './reducers/counter.reducers';
import {map} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [
    DatePipe,
    AsyncPipe
  ],
  styleUrl: './app.component.scss'
})
export class AppComponent {
  private store = inject(Store);
  title = 'practice';
  updatedAt = new Date();
  count$ = this.store.select(countSelector);
  disabled$ = this.count$.pipe(map(count => count <= 0));

  increment(): void {
    this.updatedAt = new Date();
    this.store.dispatch(increment());
  }

  decrement(): void {
    this.updatedAt = new Date();
    this.store.dispatch(decrement());
  }

  reset(): void {
    this.updatedAt = new Date();
    this.store.dispatch(reset());
  }
}
