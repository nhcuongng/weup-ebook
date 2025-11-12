import _ from 'lodash';

type TParamFetch = {
  init?: RequestInit;
  onError?: (error: any) => void;
};

export class BaseService {
  prefix = '/api';

  url: string = '';

  host = process.env.NEXT_PUBLIC_APP_URL || 'http://localhos:3000';

  constructor(private endpoint: string) {
    this.url = `${this.host}/${this.prefix}/${this.endpoint}`;
  }

  parseError(error: any) {
    return error.message || `Fetched error`;
  }

  async fetch<T = any>(params: TParamFetch) {
    const { init, onError } = params;

    try {
      const response = await fetch(this.url, init);

      if (!response.ok) {
        throw new Error('Failed to fetch');
      }

      const result = await response.json();
      return result.data as T;
    } catch (error) {
      if (_.isFunction(onError)) {
        onError(error);
      }

      return undefined;
    }
  }
};
