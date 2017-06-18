import { Injectable } from '@angular/core';

export class Worker {
  constructor(
    public id: number,
    public name: string,
    public subname: string,
    public surname: string,
    public age: number,
    public position: string)
    { }
}

export var WORKERS: Worker[] =
 [
  new Worker(1, 'Иван1', 'Сергеевич', 'Петров', 28, 'Manager'),
  new Worker(2, 'Иван2', 'Сергеевич', 'Петров', 28, 'Manager'),
  new Worker(3, 'Иван3', 'Сергеевич', 'Петров', 28, 'Manager'),
  new Worker(4, 'Иван4', 'Сергеевич', 'Петров', 28, 'Manager'),
  new Worker(5, 'Иван5', 'Сергеевич', 'Петров', 28, 'Manager'),
  new Worker(6, 'Иван6', 'Сергеевич', 'Петров', 28, 'Manager')
];

let workersPromise = Promise.resolve(WORKERS);

@Injectable()
export class WorkerService {
  getWorkers() { return WORKERS; }

  getWorker(id: number | string) {
    return workersPromise
      .then(workers => workers.find(Worker => Worker.id === +id));
  }
}
