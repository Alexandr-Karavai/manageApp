import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';

import { Router } from '@angular/router';

import { AppComponent }            from './app.component';
import { AppRoutingModule }        from './app-routing.module';

import { WorkersModule }            from './workers/workers.module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    WorkersModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent
  ],

  bootstrap: [ AppComponent ]
})
export class AppModule {}
