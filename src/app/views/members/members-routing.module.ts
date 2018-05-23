import { MemberDetailComponent } from './member-detail.component';
import { MemberEditComponent } from './member-edit.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from '../../_guards/auth.guard';
import { MemberEditResolver } from './member-edit.resolver';
import { MemberDetailResolver } from './member-detail.resolver';
import { EditoUserComponent } from './edito-user.component';
import { ListUserComponent } from './list-user.component';
import { RegisterUserComponent } from './register-user.component';
import { ShikoUserComponent } from './shiko-user.component';
import { RoleGuard } from '../../_guards/role.guard';

const routes: Routes = [
  {
    path: '', 
    runGuardsAndResolvers: 'always', 
    canActivate: [RoleGuard],
    data: {
      expectedRole: '1'
    },
    children: [
      {
        path: 'register-user',
        component: RegisterUserComponent,
        resolve: {user: MemberEditResolver},
        data: {
          title: 'Register User'
        }
      },
      {
        path: 'member-detail',
        component: MemberDetailComponent,
        resolve: {user: MemberEditResolver},
        data: {
          title: 'Edito User'
        }
      },
      {
        path: 'list-user',
        component: ListUserComponent,
        resolve: {user: MemberEditResolver},
        data: {
          title: 'Lista e Anetareve'
        }
      },
      {
        path: 'edito-user',
        component: EditoUserComponent,
        resolve: {user: MemberEditResolver},
        data: {
          title: 'Edito User'
        }
      },
      {
        path: 'shiko-user/:id',
        component: ShikoUserComponent,
        resolve: {user: MemberDetailResolver},
        data: {
          title: 'Shiko User'
        }
      },
      { path: 'member-edit/:id', component: MemberEditComponent, resolve: {user: MemberDetailResolver}},
      {
        path: 'member-detail',
        component: MemberDetailComponent,
        data: {
          title: 'Profili Im'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MembersRoutingModule {}
