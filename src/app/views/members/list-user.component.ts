import { UserService } from './../../_services/User.service';
import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';
import { Users } from '../../_models/User';
import { ActivatedRoute } from '@angular/router';
import { Pagination, PaginatedResult } from '../../_models/Pagination';
import { AlertifyService } from '../../_services/alertify.service';


@Component({
  selector: 'app-list-user',
  templateUrl: 'list-user.component.html'
})
export class ListUserComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  users: Users[];
 pagination: Pagination;
  // We use this trigger because fetching the list of persons can be quite long,
  // thus we ensure the data is fetched before rendering
  dtTrigger: Subject<any> = new Subject();

  constructor(private service: UserService, private route: ActivatedRoute, private alertify : AlertifyService) { }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 2
    };
    this.route.data.subscribe(data => {
      this.users = data['users'].result;
      this.pagination = data['users'].pagination
      this.dtTrigger.next();
    });
        // Calling the DT trigger to manually render the table
        
   
    }
    loadUsers() {
      this.service.getPaginatedUsers(this.pagination.currentPage, this.pagination.itemsPerPage)
      .subscribe((res: PaginatedResult<Users[]>) => {
        this.users = res.result;
        this.pagination = res.pagination;
      }, error => {
        this.alertify.error(error)
      });
    }
    pageChanged(event: any): void {
      this.pagination.currentPage = event.page;
      this.loadUsers();
    }
  
  }