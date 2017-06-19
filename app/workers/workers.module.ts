import { NgModule }                 from '@angular/core';
import { CommonModule }             from '@angular/common';
import { FormsModule }              from '@angular/forms';

import { WorkerListComponent }      from './worker-list/worker-list.component';
import { WorkerDetailComponent }    from './worker-detail/worker-detail.component';
import { WorkerEditComponent }      from './edit/worker-edit.component';
import { NewWorkerComponent }       from './new-worker/new-worker.component';

import { WorkerService }            from './worker.service';

import { WorkerRoutingModule }      from './workers-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    WorkerRoutingModule
  ],
  declarations: [
    WorkerListComponent,
    WorkerDetailComponent,
    WorkerEditComponent,
    NewWorkerComponent
  ],
  providers: [ WorkerService ]
})
export class WorkersModule {}
