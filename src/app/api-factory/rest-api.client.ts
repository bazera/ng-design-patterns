import { HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { ApiContract, User } from './api-factory.model';
import { Observable, of } from 'rxjs';

export class HttpClient {
  get(_: HttpParams) {
    return of<User>({
      _id: '1',
      firstName: 'Giorgi',
      lastName: 'Restashvili',
    } satisfies User);
  }

  post(param: Omit<User, '_id'>) {
    return of(`successful rest creation, ${JSON.stringify(param)}`);
  }
}

@Injectable()
export class RESTApiClient implements ApiContract {
  private http = inject(HttpClient);

  users = {
    getUser: (id: string): Observable<User> => {
      const params = new HttpParams().set('id', id);
      return this.http.get(params);
    },
    createUser: (payload: Omit<User, '_id'>) => {
      return this.http.post(payload);
    },
  };
}
