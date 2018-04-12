import { AuthService } from './../../_services/auth.service';
import { AlertifyService } from './../../_services/alertify.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html'
})
export class AppHeaderComponent implements OnInit{ 

  constructor(public authService: AuthService, private alertify: AlertifyService, private router: Router ){}

  ngOnInit(){}
  
  logout() {
  this.authService.userToken = null;
  localStorage.removeItem('token');
  this.alertify.message('logged out');
  this.router.navigate(['/pages/login']);
}
}

