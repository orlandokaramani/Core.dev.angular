import { MemberEditComponent } from './member-edit.component';
import { NgModule } from '@angular/core';


import { MembersRoutingModule } from './members-routing.module';
import { FormsModule } from '@angular/forms';
import { MemberDetailComponent } from './member-detail.component';
import { NgxGalleryModule } from 'ngx-gallery';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { AuthService } from '../../_services/auth.service';
import { AlertifyService } from '../../_services/alertify.service';
import { AuthGuard } from '../../_guards/auth.guard';
import { UserService } from '../../_services/User.service';


@NgModule({
  imports: [ MembersRoutingModule,

  ],
  declarations: [
 MemberDetailComponent,
 MemberEditComponent
  ],
  providers: [
    

  ],

})
export class MembersModule { }
