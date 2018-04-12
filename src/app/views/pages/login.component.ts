import { AuthService } from '../../_services/auth.service';
import { Component, OnInit } from '@angular/core';
import { AlertifyService } from '../../_services/alertify.service';
import { Router } from '@angular/router';

@Component({
  templateUrl: 'login.component.html'
})
export class LoginComponent implements OnInit{
  model: any = {};
  constructor(public authService: AuthService, private alertify: AlertifyService, private router: Router) { }

  ngOnInit(){
    if (this.authService.loggedIn()) {
  this.router.navigate(['dashboard']);
  this.alertify.message('You are already logged in !')
}}

login() {
  this.authService.login(this.model).subscribe(data => {
    this.router.navigate(['dashboard']);
    this.alertify.success('logged in successfully')
    }, error => {
    this.alertify.error('Failed to login');
   });
}


}
