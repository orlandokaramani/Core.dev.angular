import { AuthHttp } from 'angular2-jwt';
import { Observable } from 'rxjs/Observable';
import { Http, RequestOptions, Headers, Response } from '@angular/http';
import { environment } from '../../environments/environment';
import { Injectable } from '@angular/core';
import { Users } from '../_models/User';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'
import 'rxjs/add/observable/throw'

import { Bashkia } from '../_models/Bashkia';
import { Qv } from '../_models/QV';
import { Totals } from '../_models/Totals';
import { PaginatedResult } from '../_models/Pagination';

let positions: string[] = [
	"HR Manager",
	"IT Manager",
	"Controller",
	"Sales Manager",
	"Support Manager",
	"Shipping Manager"
];

let states: string[] = ["AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DE", "FL", "GA", "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD", "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ", "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC", "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY"];

@Injectable()
export class UserService {
    baseUrl = environment.apiUrl

constructor(private authHttp: AuthHttp) {}


getPositions() {
    return positions;
}
getStates() {
    return states;
}

getUsers(): Observable<Users[]> {
    return this .authHttp
    .get(this.baseUrl + 'users')
    .map(response => <Users[]>response.json())
    .catch(this.handleError)
}

getPaginatedUsers(page?: number, itemsPerPage?: number){
    const paginatedResult: PaginatedResult<Users[]> = new PaginatedResult<Users[]>();
    let queryString = '?';

    if(page != null && itemsPerPage != null) {
        queryString += 'pageNumber=' + page + '&pageSize=' + itemsPerPage;
    }
    return this.authHttp
    .get(this.baseUrl + 'users' + queryString)
    .map((response: Response) => {
        paginatedResult.result = response.json();
        
        if(response.headers.get('Pagination')!= null){
            paginatedResult.pagination = JSON.parse(response.headers.get('Pagination'));
        }
        return paginatedResult;
    })
    .catch(this.handleError);
    
}

getTotals(): Observable<Totals>{
    return this.authHttp.get(this.baseUrl + 'values')
    .map(response => <Totals>response.json())
    .catch(this.handleError);

}
getUser(id): Observable<Users>{
    return this.authHttp
    .get(this.baseUrl + 'users/' + id)
    .map(response => <Users>response.json())
    .catch(this.handleError);
}

GetQv(): Observable<any>{
    return this.authHttp
    .get(this.baseUrl + 'qarku')
    .map(response => response.json())
    .catch(this.handleError);
}
UpdateUser(id: number, user: Users){
    return this.authHttp.put(this.baseUrl + 'users/' + id, user).catch(this.handleError);
    
}
setMainPhoto(userId: number, id: number){
    return this.authHttp.post(this.baseUrl + 'users/' + userId + '/photos/' + id + '/setMain', {}).catch(this.handleError);
}

deletePhoto(userId: number, id: number)
{
    return this.authHttp.delete(this.baseUrl + 'users/' + userId + '/photos/' + id).catch(this.handleError)
}
private handleError(error: any) {

    const applicationError = error.headers.get('Application-Error');
    if (applicationError) {
        return Observable.throw(applicationError);
    }
    const serverError = error.json();
    let modelStateErrors = '';
    if (serverError) {
        for (const key in serverError) {
            if (serverError[key]) {
                modelStateErrors += serverError[key] + '\n';
            }
        }
        return Observable.throw(
            modelStateErrors || 'Server error'
        );
    }
}

}