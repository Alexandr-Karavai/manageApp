import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  <nav class="navbar navbar-fixed-top">
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
    <router-outlet></router-outlet>
    <router-outlet name="popup"></router-outlet>
  `
})
export class AppComponent {}
