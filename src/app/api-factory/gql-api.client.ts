import { inject, Injectable } from '@angular/core';
import { ApiContract, User } from './api-factory.model';
import { Observable, of } from 'rxjs';

export const GET_USER = {};
export const ADD_USER = {};

export class Apollo {
  watchQuery(_: { query: unknown; variables: { id: string } }) {
    return of<User>({
      _id: '1',
      firstName: 'Giorgi',
      lastName: 'Graphqlashvili',
    } satisfies User);
  }

  mutate({ variables }: { mutation: unknown; variables: Omit<User, '_id'> }) {
    return of(`successful graphQl mutation, ${JSON.stringify(variables)}`);
  }
}

@Injectable()
export class GraphQLApiClient implements ApiContract {
  private apollo = inject(Apollo);

  users = {
    getUser: (id: string): Observable<User> => {
      return this.apollo.watchQuery({
        query: GET_USER,
        variables: {
          id,
        },
      });
    },
    createUser: (payload: Omit<User, '_id'>) => {
      return this.apollo.mutate({
        mutation: ADD_USER,
        variables: payload,
      });
    },
  };
}
