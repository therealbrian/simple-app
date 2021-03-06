import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { CountersState } from '../counters.store';

@Injectable()
export class CounterService {
  private readonly url: string;

  constructor(private http: Http) {
    this.url = 'http://localhost:4000';
   }

  get(): Observable<number[]> {
    return this.http.get(this.url + '/counters')
      .map(res => res.json().data);
  }

  post(counters: CountersState) {
    return this.http.post(this.url + '/counters', counters);
  }

}
