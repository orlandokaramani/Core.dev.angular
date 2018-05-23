import { AlertifyService } from '../../_services/alertify.service';
import { Injectable } from '@angular/core';
import { Resolve, Router, ActivatedRouteSnapshot } from "@angular/router";
import { UserService } from '../../_services/User.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch'
import { Totals } from '../../_models/Totals';

@Injectable()
export class DashboardTotalsResolver implements Resolve<Totals>
{
    constructor(private userService: UserService, private router: Router, private alertify: AlertifyService){}

    resolve(route: ActivatedRouteSnapshot): Observable<Totals>{
        return this.userService.getTotals().catch(error => {
            this.alertify.error('Problem gjatë ngarkimit të të dhënave');
        this.router.navigate(['/dashboard']);
        return Observable.of(null);
    
        })
        

    }
}