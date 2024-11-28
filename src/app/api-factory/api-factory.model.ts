import { InjectionToken, Type } from '@angular/core';
import { environment } from '../../environments/environment';
import { ApiStrategy } from '../../environments/environment.model';
import { GraphQLApiClient } from './gql-api.client';
import { Observable } from 'rxjs';
import { RESTApiClient } from './rest-api.client';

export interface User {
  _id: string;
  firstName: string;
  lastName: string;
}

export interface ApiContract {
  users: {
    getUser(id: string): Observable<User>;
    createUser(payload: Omit<User, '_id'>): Observable<string>;
  };
}

export const API_CLIENT_CONTRACT = new InjectionToken<ApiContract>(
  'api-client-contract'
);

export const API_CONTRACT_BY_STRATEGY: Record<ApiStrategy, Type<unknown>> = {
  rest: RESTApiClient,
  graphql: GraphQLApiClient,
};

export function getClientContractProvider() {
  return new API_CONTRACT_BY_STRATEGY[environment.apiStrategy]();
}
