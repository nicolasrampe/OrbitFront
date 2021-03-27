import { Component, OnInit } from '@angular/core';
import { Student } from '../student';
import { RestService} from '../rest.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-students-detail',
  templateUrl: './students-detail.component.html',
  styleUrls: ['./students-detail.component.css']
})
export class StudentsDetailComponent implements OnInit {

student: Student | undefined;
  constructor(public rest: RestService, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
    this.rest.getStudent(this.route.snapshot.params.id).subscribe(
      (data: Student) => this.student = { ...data }
    );
  }

}
