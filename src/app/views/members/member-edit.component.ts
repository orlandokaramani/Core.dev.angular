import { AlertifyService } from './../../_services/alertify.service';
import { Qv } from './../../_models/QV';
import { Qarku } from './../../_models/Qarku';
import { Bashkia } from './../../_models/Bashkia';
import { Njesia } from './../../_models/Njesia';
import { Users } from './../../_models/User';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from '../../_services/User.service';
import { Observable } from 'rxjs/Observable';
import {FormBuilder,FormGroup,Validators,NgForm} from '@angular/forms';
import {FormControl,Validator} from '@angular/forms';
import {Qarqet,Bashkite,Njesite} from '../../../assets/data';
import { AuthService } from '../../_services/auth.service';

@Component({
  selector: 'app-member-edit',
  templateUrl: './member-edit.component.html',

})

export class MemberEditComponent implements OnInit {
photoUrl: string;
 id: number;
private sub: any;
user: Users;
qarqet = Qarqet;
bashkite = Bashkite;
njesite= Njesite;
bashkiaselektuar;
qarkuselektuar;
njesiaselektuar
@ViewChild('editForm') editForm: NgForm;

  constructor(private route: ActivatedRoute, private service: UserService, private alertify: AlertifyService, private auth: AuthService) {}
  
  
  onchangeQarku(id: number){
    this.bashkite = [];
    this.qarkuselektuar = id;
    this.bashkite = Bashkite;
    this.bashkite = this.bashkite.filter(a => a.idQarku == id);
    console.log(this.bashkite)
  }
 
  onChangeBashkite(id: number) {
    this.njesite = [];
    this.bashkiaselektuar = id;
    this.njesite = Njesite;
    this.njesite = this.njesite.filter(a => a.idBashkia == id);
   
  }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.user = data['users'];
      console.log(data);
    })
    this.auth.currentPhotoUrl.subscribe(photoUrl => this.photoUrl = photoUrl);
  }
  updateUser(){
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id'];
 this.service.UpdateUser(this.id , this.user).subscribe(next=> {
        this.alertify.success('Ndryshimet u ruajten me sukses');
      this.editForm.reset(this.user);
      }, error => {
        this.alertify.error('Ju nuk keni akses për të ndryshuar të dhënat!')
      })
   });
    
   }

   updateMainPhoto(photoUrl) {
     this.user.photoUrl = photoUrl;
   }
}
