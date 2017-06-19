import 'rxjs/add/operator/switchMap';
import { Observable }                     from 'rxjs/Observable';
import { Component, OnInit }              from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Http }                           from '@angular/http';

import { Worker, WorkerService }          from '../worker.service';

@Component({
  moduleId: module.id,
  templateUrl: './worker-list.component.html'
})

export class WorkerListComponent implements OnInit {

  workers: Worker[];

  private selectedId: number;

  constructor(
    private service: WorkerService,
    private route: ActivatedRoute,
    private router: Router,
    private http: Http
  ) {}

  selectedWorker: Worker;

  getWorkers(): void {
    this.service
        .getWorkers()
        .then(workers => this.workers = workers);
  }

  delete(worker: Worker): void {
  this.service
      .delete(worker.id)
      .then(() => {
        this.workers = this.workers.filter(h => h !== worker);
        if (this.selectedWorker === worker) { this.selectedWorker = null; }
      });
}


  ngOnInit(): void {
    this.getWorkers();
  }

  onSelect(worker: Worker): void {
    this.selectedWorker = worker;
    this.router.navigate(['/worker', this.selectedWorker.id]);
  }

  add(): void {
    this.router.navigate(['/workers/new']);
  }
}
