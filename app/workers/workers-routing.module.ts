import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WorkerListComponent }    from './worker-list.component';
import { WorkerDetailComponent }  from './worker-detail.component';

const workersRoutes: Routes = [
  { path: 'workers',  component: WorkerListComponent },
  { path: 'worker/:id', component: WorkerDetailComponent }
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
