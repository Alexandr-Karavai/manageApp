import 'rxjs/add/operator/switchMap';
import { Component, OnInit, HostBinding } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { Worker, WorkerService }  from '../worker.service';
import { Http, URLSearchParams } from '@angular/http';

@Component({
  moduleId: module.id,
  templateUrl: './worker-detail.component.html'
})
export class WorkerDetailComponent implements OnInit {

  worker: Worker;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: WorkerService,
    private http: Http
  ) {}

  ngOnInit(): void {
     this.route.params
       .switchMap((params: Params) => this.service.getWorker(+params['id']))
       .subscribe(worker => this.worker = worker);
   }

  gotoWorkers() {
    let workerId = this.worker ? this.worker.id : null;
    this.router.navigate(['/workers']);
  }

  editWorkers() {
    this.router.navigate(['/worker/edit', this.worker.id]);
  }
}
