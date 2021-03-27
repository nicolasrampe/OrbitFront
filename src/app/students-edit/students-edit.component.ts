import { Component, Input, OnInit } from '@angular/core';
import { RestService } from '../rest.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-students-edit',
  templateUrl: './students-edit.component.html',
  styleUrls: ['./students-edit.component.css']
})
export class StudentsEditComponent implements OnInit {

  @Input() studentData: any = {id: 0, username: '', firstname: '',lastname:'',age: -1,career:''};

  constructor(public rest: RestService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.rest.getStudent(this.route.snapshot.params.id).subscribe((data: {}) => {
      console.log(data);
      this.studentData = data;
    });
  }
  updateStudent(): void {
    this.rest.updateStudent(this.route.snapshot.params.id, this.studentData).subscribe((result) => {
      this.router.navigate(['/students-detail/' + result.id]);
    }, (err) => {
      console.log(err);
    });
  }
}
