import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { Worker, WorkerService }  from './worker.service';

@Component({
  template: `
    <div class="container">
      <div class="page-header">
          <h1>Сотрудники компании</h1>
      </div>
      <div class="panel">
          <div class="form-horizontal">
              <div class="form-group">
                  <div class="col-md-6 col-md-offset-3">
                      <input type="number" class="form-control" [(ngModel)]="id" placeholder = "Номер сотрудника">
                  </div>
              </div>
              <div class="form-group">
                  <div class="col-md-6 col-md-offset-3">
                      <input class="form-control" [(ngModel)]="name" placeholder="Имя">
                  </div>
              </div>
              <div class="form-group">
                  <div class="col-md-6 col-md-offset-3">
                      <input class="form-control" [(ngModel)]="subname" placeholder="Отчество">
                  </div>
              </div>
              <div class="form-group">
                  <div class="col-md-6 col-md-offset-3">
                      <input class="form-control" [(ngModel)]="surname" placeholder="Фамилия">
                  </div>
              </div>
              <div class="form-group">
                  <div class="col-md-6 col-md-offset-3">
                      <input type="number" class="form-control" [(ngModel)]="age" placeholder = "Возраст">
                  </div>
              </div>
              <div class="form-group">
                  <div class="col-md-6 col-md-offset-3">
                      <input class="form-control" [(ngModel)]="position" placeholder="Должность">
                  </div>
              </div>
              <div class="form-group text-center">
                  <div class="col-md-offset-3 col-md-6">
                      <button class="btn btn-success" (click)="addItem(id, name, subname, surname, age, position)">Добавить</button>
                  </div>
              </div>
          </div>
          <table class="table table-striped">
              <thead>
                  <tr>
                      <th>ID</th>
                      <th>Имя</th>
                      <th>Фамилия</th>
                      <th>Должность</th>
                  </tr>
              </thead>
              <tbody>
                  <tr *ngFor="let worker of workers">
                      <td><button type="button" class="btn btn-info"
                      [class.selected]="isSelected(worker)"
                      (click)="onSelect(worker)">
                      {{worker.id}}</button>
                      </td>
                      <td>{{worker.name}}</td>
                      <td>{{worker.surname}}</td>
                      <td>{{worker.position}}</td>
                  </tr>
              </tbody>
          </table>
        </div>
    </div>
  `
})

export class WorkerListComponent implements OnInit {

  workers: Worker[];

  private selectedId: number;

  constructor(
    private service: WorkerService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.getWorkers();
  }
  getWorkers() {
    this.workers = this.service.getWorkers();
  }
    addItem(id: number, name: string, subname: string, surname: string, age: number, position: string): void {

        if(id==null || id==undefined)
            return;
        if(name==null || name==undefined || name.trim()=="")
            return;
        if(subname==null || subname==undefined || subname.trim()=="")
            return;
        if(surname==null || surname==undefined || surname.trim()=="")
            return;
        if(age==null || age==undefined)
            return;
        if(position==null || position==undefined || position.trim()=="")
            return;
        this.workers.push(new Worker(id, name, subname, surname, age, position));
    }

  isSelected(worker: Worker) { return worker.id === this.selectedId; }

  onSelect(worker: Worker) {
    this.router.navigate(['/worker', worker.id]);
  }
}
