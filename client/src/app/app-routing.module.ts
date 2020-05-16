import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CoursesComponent } from './courses/courses.component';
import { CourseComponent } from './course/course.component';

import { TeachersComponent } from './teachers/teachers.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormComponent } from './form/form.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TeacherComponent } from './teacher/teacher.component';
import { SearchComponent } from './search/search.component';
import { FeatureCategoryComponent } from './feature-category/feature-category.component';
import { SearchByCategoryComponent } from './search-by-category/search-by-category.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'courses',
    component: CoursesComponent,
  },
  {
    path: 'courses/:id',
    component: CourseComponent,
    // children: [{ path: ':id', component: CourseComponent }],
  },
  {
    path: 'teachers',
    component: TeachersComponent,
    children: [{ path: ':id', component: TeacherComponent }],
  },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'form', component: FormComponent },
  { path: 'admin', component: DashboardComponent },
  { path: 'search', component: SearchComponent },
  { path: 'search/:value', component: SearchComponent },
  { path: 'category', component: FeatureCategoryComponent },
  { path: 'category/:name', component: SearchByCategoryComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
