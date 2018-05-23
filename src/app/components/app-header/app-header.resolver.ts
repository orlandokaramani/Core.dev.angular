import { AlertifyService } from '../../_services/alertify.service';
import { Injectable } from '@angular/core';
import { Resolve, Router, ActivatedRouteSnapshot } from "@angular/router";
import { UserService } from '../../_services/User.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch'

import { Users } from '../../_models/User';
import { AuthService } from '../../_services/auth.service';

@Injectable()
export class DashboardTotalsResolver implements Resolve<Users>
{
    constructor(private userService: UserService, private router: Router, private alertify: AlertifyService, private auth: AuthService){}

    resolve(route: ActivatedRouteSnapshot): Observable<Users>{
        return this.userService.getUser(this.auth.decodedToken.nameid).catch(error => {
            this.alertify.error('Problem gjatë ngarkimit të të dhënave');
        this.router.navigate(['/dashboard']);
        return Observable.of(null);
    
        })
        

    }
}