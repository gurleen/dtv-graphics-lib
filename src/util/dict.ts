export interface IDictionary<T> {
  [key: string]: T;
}

export class Dictionary<T> implements IDictionary<T> {
  [key: string]: T;

  static clear<T>(dict: IDictionary<T>): void {
    for (const key in dict) {
      delete dict[key];
    }
  }
}
