import { Component } from '@angular/core';
import { Worker } from './worker';
import {WorkerDetailComponent} from './worker-detail.component';
import {WorkerService} from './worker.service';
import {OnInit} from '@angular/core';
import {WORKERS} from './mock-workers';

@Component({
    selector: 'manage-app',
    template: `<nav class="navbar navbar-fixed-top">
    <div class="container">
      <div class="navbar-header">
        <a class="navbar-brand" href="#"><i class="fa fa-users fa-2x"></i></a>
      </div>
      <ul class="nav navbar-nav navbar-right">
        <li><button type="button" class="btn btn-info navbar-btn btn-lg" data-toggle="modal" data-target="#myModal"><span class="glyphicon glyphicon-user"></span> Sign Up</button></li>
        <li><button type="button" class="btn btn-info navbar-btn btn-lg" data-toggle="modal"
        data-target="#myModal2"><span class="glyphicon glyphicon-log-in"></span> Login</button></li>
      </ul>
    </div>
  </nav>
  <!-- Modal -->
  <div id="myModal" class="modal fade" role="dialog">
    <div class="modal-dialog">
    <!-- Modal content-->
       <div class="modal-content">
         <div class="modal-header">
           <button type="button" class="close" data-dismiss="modal">&times;</button>
           <h4 class="modal-title">Modal Header</h4>
         </div>
         <div class="modal-body">
           <p>Some text in the modal.</p>
         </div>
         <div class="modal-footer">
          <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
         </div>
       </div>
     </div>
  </div>
  <div class="container">
    <div class="page-header">
        <h1>Сотрудники компании</h1>
    </div>
    <div class="panel">
        <div class="form-inline">
            <div class="form-group">
                <div class="col-md-8">
                    <input type="number" class="form-control" [(ngModel)]="id" placeholder = "Номер сотрудника" />
                </div>
            </div>
            <div class="form-group">
                <div class="col-md-6">
                    <input class="form-control" [(ngModel)]="name" placeholder="Имя" />
                </div>
            </div>
            <div class="form-group">
                <div class="col-md-6">
                    <input class="form-control" [(ngModel)]="surname" placeholder="Фамилия" />
                </div>
            </div>
            <div class="form-group">
                <div class="col-md-6">
                    <input class="form-control" [(ngModel)]="position" placeholder="Должность" />
                </div>
            </div>
            <div class="form-group">
                <div class="col-md-offset-2 col-md-8">
                    <button class="btn btn-success" (click)="addItem(id, name, surname, position)">Добавить</button>
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
                    <td><button type="button" class="btn btn-info">{{worker.id}}</button></td>
                    <td>{{worker.name}}</td>
                    <td>{{worker.surname}}</td>
                    <td>{{worker.position}}</td>
                </tr>
            </tbody>
        </table>
      </div>
  </div>`,
  providers: [WorkerService]
})

export class AppComponent implements OnInit {

  workers: Worker[];

  constructor(private _workerService: WorkerService) {}

  ngOnInit() {
    this.getWorkers();
  }
  getWorkers() {
    this.workers = this._workerService.getWorkers();
  }
    addItem(id: number, name: string, surname: string, position: string): void {

        if(id==null || id==undefined)
            return;
        if(name==null || name==undefined || name.trim()=="")
            return;
        if(surname==null || surname==undefined || surname.trim()=="")
            return;
        if(position==null || position==undefined || position.trim()=="")
            return;
        this.workers.push(new Worker(id, name, surname, position));
    }
}
