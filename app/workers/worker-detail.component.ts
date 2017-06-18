import 'rxjs/add/operator/switchMap';
import { Component, OnInit, HostBinding } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { Worker, WorkerService }  from './worker.service';

@Component({
  template: `
  <div class="container" *ngIf="worker">
  <div class="page-header">
      <h1>Сотрудник c ID: {{ worker.id }}</h1>
  </div>
  <div class="row">
    <div class="col-md-6 col-md-offset-2" id="user"></div>
    <div class="col-md-4">
      <h3>ID: {{ worker.id }}</h3>
      <h3>Имя: {{ worker.name }}</h3>
      <h3>Отчество: {{ worker.subname }}</h3>
      <h3>Фамилия: {{ worker.surname }}</h3>
      <h3>Возраст: {{ worker.age }}</h3>
      <h3>Должность: {{ worker.position }}</h3>
    </div>
    </div>
      <div class="text-center">
        <button class="btn btn-success" (click)="gotoWorkers()">Назад</button>
        <button class="btn btn-primary" (click)="editWorkers()">Редактировать</button>
      </div>
  </div>

  <div *ngIf="worker" class="container" id="editContainer">
  <div class="page-header">
      <h1>Редактирование</h1>
  </div>
    <div class="form-horizontal">
        <div class="form-group">
            <div class="col-md-6 col-md-offset-3">
                <input type="number" class="form-control" [(ngModel)]="worker.id" placeholder = "Номер сотрудника">
            </div>
        </div>
        <div class="form-group">
            <div class="col-md-6 col-md-offset-3">
                <input class="form-control" [(ngModel)]="worker.name" placeholder="Имя">
            </div>
        </div>
        <div class="form-group">
            <div class="col-md-6 col-md-offset-3">
                <input class="form-control" [(ngModel)]="worker.subname" placeholder="Отчество">
            </div>
        </div>
        <div class="form-group">
            <div class="col-md-6 col-md-offset-3">
                <input class="form-control" [(ngModel)]="worker.surname" placeholder="Фамилия">
            </div>
        </div>
        <div class="form-group">
            <div class="col-md-6 col-md-offset-3">
                <input type="number" class="form-control" [(ngModel)]="worker.age" placeholder = "Возраст">
            </div>
        </div>
        <div class="form-group">
            <div class="col-md-6 col-md-offset-3">
                <input class="form-control" [(ngModel)]="worker.position" placeholder="Должность">
            </div>
        </div>
    </div>
  </div>
  `
})
export class WorkerDetailComponent implements OnInit {

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

  gotoWorkers() {
    let workerId = this.worker ? this.worker.id : null;
    this.router.navigate(['/workers']);
  }

  editWorkers() {
    this.router.navigate(['/edit/workers']);
  }
}
