export interface Model<T> {
  create(args: T): Promise<T>;
  read(): Promise<T[]>;
  readOne(args: string): Promise<T | null>;
  update(arg1: string, arg2: object): Promise<T | null>;
  delete(args: string): Promise<T | null>;
}
