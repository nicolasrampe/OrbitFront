import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentsComponent} from './students/students.component'
import { StudentsDetailComponent} from './students-detail/students-detail.component'
import { StudentsAddComponent} from './students-add/students-add.component'
import { StudentsEditComponent} from './students-edit/students-edit.component'

const routes: Routes = [
  {
    path: 'students',
    component: StudentsComponent,
    data: { title: 'Students List' }
  },
  {
    path: 'students-detail/:id',
    component: StudentsDetailComponent,
    data: { title: 'Students Details' }
  },
  {
    path: 'students-add',
    component: StudentsAddComponent,
    data: { title: 'Students Add' }
  },
  {
    path: 'students-edit/:id',
    component: StudentsEditComponent,
    data: { title: 'Students Edit' }
  },
  { path: '',
    redirectTo: '/students',
    pathMatch: 'full'
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
