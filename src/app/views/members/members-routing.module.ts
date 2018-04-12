import { MemberDetailComponent } from './member-detail.component';
import { MemberEditComponent } from './member-edit.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from '../../_guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Përdorues'
    },
    children: [
      {
        path: 'member-edit',
        component: MemberEditComponent,
        data: {
          title: 'Edito User'
        }
      },
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
