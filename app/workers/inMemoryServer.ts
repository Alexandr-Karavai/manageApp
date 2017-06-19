import { InMemoryDbService } from 'angular-in-memory-web-api';

export class ItemData implements InMemoryDbService {
  createDb() {
    let workers = [
      { id: 1, name: 'Иван1', subname: 'Сергеевич', surname: 'Петров1', age: 28, position: 'Manager' },
      { id: 2, name: 'Иван2', subname: 'Сергеевич', surname: 'Петров2', age: 28, position: 'Manager' },
      { id: 3, name: 'Иван3', subname: 'Сергеевич', surname: 'Петров', age: 28, position: 'Manager' },
      { id: 4, name: 'Иван4', subname: 'Сергеевич', surname: 'Петров', age: 28, position: 'Manager' },
      { id: 5, name: 'Иван5', subname: 'Сергеевич', surname: 'Петров', age: 28, position: 'Manager' },
      { id: 6, name: 'Иван6', subname: 'Сергеевич', surname: 'Петров6', age: 28, position: 'Manager' }
    ];
    return { workers };
  }
}
