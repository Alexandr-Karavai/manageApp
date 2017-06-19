import 'rxjs/add/operator/switchMap';
import { Component, OnInit, HostBinding } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { Worker, WorkerService }  from '../worker.service';

@Component({
  moduleId: module.id,
  templateUrl: './worker-edit.component.html'
})
export class WorkerEditComponent implements OnInit {

  worker: Worker;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: WorkerService
  ) {}

  ngOnInit() {
    this.route.params
      .switchMap((params: Params) => this.service.getWorker(+params['id']))
      .subscribe((worker: Worker) => this.worker = worker);
  }

  save(): void {
    this.service.update(this.worker)
      .then(() => this.gotoWorkers());
  }

  gotoWorkers() {
    let workerId = this.worker ? this.worker.id : null;
    this.router.navigate(['/worker', this.worker.id]);
  }
}
