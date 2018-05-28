import { MemberDetailComponent } from './member-detail.component';
import { MemberEditComponent } from './member-edit.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from '../../_guards/auth.guard';
import { MemberEditResolver } from './Resolvers/member-edit.resolver';
import { MemberDetailResolver } from './Resolvers/member-detail.resolver';
import { EditoUserComponent } from './edito-user.component';
import { ListUserComponent } from './list-user.component';
import { RegisterUserComponent } from './register-user.component';
import { ShikoUserComponent } from './shiko-user.component';
import { RoleGuard } from '../../_guards/role.guard';
import { MemberListResolver } from './Resolvers/member-list.resolver';

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
        resolve: {users: MemberEditResolver},
        data: {
          title: 'Register User'
        }
      },
      {
        path: 'member-detail',
        component: MemberDetailComponent,
        resolve: {users: MemberEditResolver},
        data: {
          title: 'Edito User'
        }
      },
      {
        path: 'list-user',
        component: ListUserComponent,
        resolve: {users: MemberListResolver},
        data: {
          title: 'Lista e Anetareve'
        }
      },
      {
        path: 'edito-user',
        component: EditoUserComponent,
        resolve: {users: MemberEditResolver},
        data: {
          title: 'Edito User'
        }
      },
      {
        path: 'shiko-user/:id',
        component: ShikoUserComponent,
        resolve: {users: MemberDetailResolver},
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
