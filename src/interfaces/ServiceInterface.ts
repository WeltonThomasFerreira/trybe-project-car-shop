export interface Service<T> {
  validateId(id: string): Promise<null | Error>
  validateBody(body: T): Promise<null | Error>;
}
