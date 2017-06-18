import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';

import { WorkerListComponent }    from './worker-list.component';
import { WorkerDetailComponent }  from './worker-detail.component';

import { WorkerService } from './worker.service';

import { WorkerRoutingModule } from './workers-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    WorkerRoutingModule
  ],
  declarations: [
    WorkerListComponent,
    WorkerDetailComponent
  ],
  providers: [ WorkerService ]
})
export class WorkersModule {}
