
import { AlertifyService } from '../../../_services/alertify.service';
import { Injectable } from '@angular/core';
import { Users } from '../../../_models/User';
import { Resolve, Router, ActivatedRouteSnapshot } from "@angular/router";
import { UserService } from '../../../_services/User.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch'
@Injectable()
export class MemberDetailResolver implements Resolve<Users>
{
    constructor(private userService: UserService, private router: Router, private alertify: AlertifyService){}

    resolve(route: ActivatedRouteSnapshot): Observable<Users>{
        return this.userService.getUser(route.params['id']).catch(error => {
            this.alertify.error('Problem gjatë ngarkimit të të dhënave');
        this.router.navigate(['/members']);
        return Observable.of(null);
    
        })
    

    }
}