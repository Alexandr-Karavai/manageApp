import { NgModule }             from '@angular/core';
import { BrowserModule }        from '@angular/platform-browser';
import { FormsModule }          from '@angular/forms';
import { HttpModule }           from '@angular/http';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { Router }               from '@angular/router';

import { AppComponent }         from './app.component';
import { AppRoutingModule }     from './app-routing.module';

import { WorkersModule }        from './workers/workers.module';
import { LoginFormModule }      from './login-form/login-form.module';

import {ItemData} from './workers/inMemoryServer'

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(ItemData),
    LoginFormModule,
    WorkersModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent
  ],

  bootstrap: [ AppComponent ]
})
export class AppModule {}
