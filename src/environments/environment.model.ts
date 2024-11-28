export interface Environment {
  production: boolean;
  apiUrl: string;
  apiStrategy: ApiStrategy;
}

export type ApiStrategy = 'rest' | 'graphql';
