export interface Service<T> {
  validate(args: T): Promise<null | Error>;
}
