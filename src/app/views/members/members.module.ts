import { MemberDetailResolver } from './member-detail.resolver';

import { MemberEditResolver } from './member-edit.resolver';
import { CommonModule } from '@angular/common';
import { MemberEditComponent } from './member-edit.component';
import { NgModule } from '@angular/core';


import { MembersRoutingModule } from './members-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MemberDetailComponent } from './member-detail.component';
import { NgxGalleryModule } from 'ngx-gallery';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { AuthService } from '../../_services/auth.service';
import { AlertifyService } from '../../_services/alertify.service';
import { AuthGuard } from '../../_guards/auth.guard';
import { UserService } from '../../_services/User.service';
import { BsDropdownModule, PaginationModule, BsDatepickerModule, PopoverModule } from 'ngx-bootstrap';
import { AuthModule } from 'angular2-jwt';
import { EditoUserComponent } from './edito-user.component';
import { DataTablesModule } from 'angular-datatables';
import { ListUserComponent } from './list-user.component';
import { RegisterUserComponent } from './register-user.component';
import { ShikoUserComponent } from './shiko-user.component';
import { DxSelectBoxModule, DxTextAreaModule, DxDateBoxModule, DxFormModule } from 'devextreme-angular';
import { ShowHidePasswordModule } from 'ngx-show-hide-password';
import { PhotoEditorComponent } from './photo-editor/photo-editor.component';
import { FileUploadModule } from 'ng2-file-upload';
import { FileSelectDirective, FileDropDirective, FileUploader } from 'ng2-file-upload/ng2-file-upload';

@NgModule({
  imports: [ 
    MembersRoutingModule,
    FormsModule,
    BsDropdownModule.forRoot(),
    BsDatepickerModule.forRoot(),
    CommonModule,
    ReactiveFormsModule,
    PopoverModule.forRoot(),
    TabsModule.forRoot(),
    DataTablesModule,
    PaginationModule.forRoot(),
    ShowHidePasswordModule.forRoot(),
    NgxGalleryModule,
    FileUploadModule
  ],
  declarations: [
  MemberDetailComponent,
  MemberEditComponent,
  EditoUserComponent,
  ListUserComponent,
  RegisterUserComponent,
  ShikoUserComponent,
  PhotoEditorComponent
,
    PhotoEditorComponent
],
  providers: [
    MemberEditResolver,
    MemberDetailResolver,
    AlertifyService
  ],

})
export class MembersModule { }
