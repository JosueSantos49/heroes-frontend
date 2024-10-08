import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoadingService {
  //Origem dos dados quanto ser observável
  private loadingSubject = new BehaviorSubject<boolean>(false);

  loading$: Observable<boolean> = this.loadingSubject.asObservable();

  constructor() {}

  hide(): void {
    this.loadingSubject.next(false);
  }

  show(): void {
    this.loadingSubject.next(true);
  }
}
