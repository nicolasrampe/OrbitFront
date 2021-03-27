import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestService } from '../rest.service';
import {Student} from '../student';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
  students: Student[] = [];
  constructor(
    public rest: RestService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.getStudents();
  }
  getStudents(): void {
    try{
      this.rest.getStudents().subscribe((resp: any)=>{
        this.students = resp;
        console.log(this.students);
      });
    }
    catch(err)
    {
      console.log(err.name + ': "' + err.message +  '" occurred when assigning x.');
    }
  }
  add(): void {
    this.router.navigate(['/students-add']);
  }
  delete(id: string): void {
    this.rest.deleteStudent(id)
      .subscribe(() => {
          this.getStudents();
        }, (err) => {
          console.log(err);
        }
      );
  }
}
