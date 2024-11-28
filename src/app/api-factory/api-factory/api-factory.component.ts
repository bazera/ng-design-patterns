import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import {
  API_CLIENT_CONTRACT,
  getClientContractProvider,
} from '../api-factory.model';
import { Apollo, GraphQLApiClient } from '../gql-api.client';
import { HttpClient, RESTApiClient } from '../rest-api.client';

@Component({
  selector: 'app-api-factory',
  imports: [],
  templateUrl: './api-factory.component.html',
  styleUrl: './api-factory.component.scss',
  providers: [
    {
      provide: API_CLIENT_CONTRACT,
      useFactory: getClientContractProvider,
    },
    GraphQLApiClient,
    RESTApiClient,
    HttpClient,
    Apollo,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ApiFactoryComponent {
  private apiContract = inject(API_CLIENT_CONTRACT);

  createUser() {
    this.apiContract.users
      .createUser({
        firstName: 'test saxeli',
        lastName: 'test gvari',
      })
      .subscribe((res) => console.log(res));
  }

  getUser() {
    this.apiContract.users.getUser('1').subscribe((res) => console.log(res));
  }
}
