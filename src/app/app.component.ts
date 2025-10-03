import {Component, inject} from '@angular/core';
import {AsyncPipe, DatePipe} from '@angular/common';
import {Store} from '@ngrx/store';
import {countSelector, decrement, increment, reset, updatedAtSelector} from './reducers/counter.reducers';
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
  count$ = this.store.select(countSelector);
  disabled$ = this.count$.pipe(map(count => count <= 0));
  updatedAt$ = this.store.select(updatedAtSelector);

  increment(): void {
    this.store.dispatch(increment());
  }

  decrement(): void {
    this.store.dispatch(decrement());
  }

  reset(): void {
    this.store.dispatch(reset());
  }
}
