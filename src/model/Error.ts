export default class MyError extends Error {
  readonly name: string;
  readonly status: number;

  constructor(message: string = '', status: number = 500) {
    super(message);
    this.name = this.constructor.name;
    this.status = status;
  }
}

export class NotFoundError extends MyError {
  constructor(message: string = 'Not Found', status: number = 404) {
    super(message, status);
  }
}
