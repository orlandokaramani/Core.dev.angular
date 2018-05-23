import { AuthService } from './../../_services/auth.service';
import { AlertifyService } from './../../_services/alertify.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Users } from '../../_models/User';
import { UserService } from '../../_services/User.service';


@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html'
})

export class AppHeaderComponent implements OnInit{ 

  constructor(public authService: AuthService, private route: ActivatedRoute, 
    private userservice: UserService,
    private alertify: AlertifyService, private router: Router ){}
  user: Users;

  ngOnInit(): void {
this.userservice.getUser(this.authService.decodedToken.nameid)
.subscribe(users => this.user = users)
   console.log(this.user)
  }
  
  logout() {
  this.authService.userToken = null;
  localStorage.removeItem('token');
  this.alertify.message('logged out');
  this.router.navigate(['/pages/login']);
}
}

