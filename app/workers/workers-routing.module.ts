import { NgModule }                 from '@angular/core';
import { RouterModule, Routes }     from '@angular/router';

import { WorkerListComponent }      from './worker-list/worker-list.component';
import { WorkerDetailComponent }    from './worker-detail/worker-detail.component';
import { WorkerEditComponent }      from './edit/worker-edit.component';
import { NewWorkerComponent }       from './new-worker/new-worker.component';
import { LoginFormComponent }       from '../login-form/login-form.component';

const workersRoutes: Routes = [
  { path: 'login',  component: LoginFormComponent },
  { path: 'workers',  component: WorkerListComponent },
  { path: 'workers/new',  component: NewWorkerComponent },
  { path: 'worker/:id', component: WorkerDetailComponent },
  { path: 'worker/edit/:id', component: WorkerEditComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(workersRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class WorkerRoutingModule { }
