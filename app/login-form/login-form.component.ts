import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Http } from '@angular/http';

import { Worker, WorkerService }  from '../workers/worker.service';

@Component({
  moduleId: module.id,
  templateUrl: './login-form.component.html'
})
export class LoginFormComponent  {

  workers: Worker[];
  id: number;
  name: string;
  subname: string;
  surname: string;
  age: number;
  position: string;
  itemArray: any[];

  private selectedId: number;

  constructor(
    private service: WorkerService,
    private route: ActivatedRoute,
    private router: Router,
    private http: Http
  ) {}

    clickHandler() {
      this.http.post('app/workers', {
        id: this.id,
        name: this.name,
        subname: this.subname,
        surname: this.surname,
        age: this.age,
        position: this.position
      }).subscribe(
        result => {
          let json = result.json();
            if(json)
              this.workers.push(json.data);
        },
        error => console.log(error.statusText)
      );
      this.router.navigate(['/workers']);
    }
}
