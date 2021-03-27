import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { StudentsComponent } from './students/students.component';
import { StudentsAddComponent } from './students-add/students-add.component';
import { StudentsDetailComponent } from './students-detail/students-detail.component';
import { StudentsEditComponent } from './students-edit/students-edit.component';
@NgModule({
  declarations: [
    AppComponent,
    StudentsComponent,
    StudentsAddComponent,
    StudentsDetailComponent,
    StudentsEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
