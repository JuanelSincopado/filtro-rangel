export abstract class DataState<T> {
  data?: T;
  error?: string;

  constructor(data?: T, error?: string) {
    this.data = data;
    this.error = error;
  }
}

export class DataSuccess<T> extends DataState<T> {
  constructor(data: T) {
    super(data);
  }
}

export class DataFailed<T> extends DataState<T> {
  constructor(error: string) {
    super(undefined, error);
  }
}
