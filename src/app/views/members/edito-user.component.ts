import { UserService } from './../../_services/User.service';
import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';
import { Users } from '../../_models/User';


@Component({
  templateUrl: 'edito-user.component.html'
})
export class EditoUserComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  users: Users[];
  // We use this trigger because fetching the list of persons can be quite long,
  // thus we ensure the data is fetched before rendering
  dtTrigger: Subject<any> = new Subject();

  constructor(private service: UserService) { }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 6
    };
    this.service.getUsers()
      
      .subscribe(users => {
        this.users = users;
        // Calling the DT trigger to manually render the table
        this.dtTrigger.next();
      });
  }


}