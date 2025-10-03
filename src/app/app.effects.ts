import {inject, Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {changeUpdatedAt, decrement, increment, reset} from './reducers/counter.reducers';
import {map} from 'rxjs';

@Injectable()
export class AppEffects {
  private actions$ = inject(Actions);

  updatedAt$ = createEffect(
    () => this.actions$.pipe(
      ofType(increment, decrement, reset),
      map(() => changeUpdatedAt({updatedAt: Date.now()}))
    ));

}
