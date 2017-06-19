import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

export class Worker {
  id: number;
  name: string;
  subname: string;
  surname: string;
  age: number;
  position: string;
}

@Injectable()
export class WorkerService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private workersUrl = 'app/workers';  // URL to web api

  constructor(private http: Http) { }

  getWorkers(): Promise<Worker[]> {
    return this.http.get(this.workersUrl)
               .toPromise()
               .then(response => response.json().data as Worker[])
               .catch(this.handleError);
  }

  getWorker(id: number): Promise<Worker> {
    const url = `${this.workersUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().data as Worker)
      .catch(this.handleError);
  }

  delete(id: number): Promise<void> {
    const url = `${this.workersUrl}/${id}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  update(worker: Worker): Promise<Worker> {
    const url = `${this.workersUrl}/${worker.id}`;
    return this.http
      .put(url, JSON.stringify(worker), {headers: this.headers})
      .toPromise()
      .then(() => worker)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
