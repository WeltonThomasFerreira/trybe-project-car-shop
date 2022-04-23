// Referência: rmanguinho
// src: https://github.com/rmanguinho/clean-ts-api/blob/master/src/presentation/errors/server-error.ts

export default class ServerError extends Error {
  constructor(stack: string) {
    super('Internal server error');
    this.name = 'ServerError';
    this.stack = stack;
  }
}
