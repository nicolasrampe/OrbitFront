import { Component, Input, OnInit } from '@angular/core';
import { RestService } from '../rest.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-students-add',
  templateUrl: './students-add.component.html',
  styleUrls: ['./students-add.component.css']
})
export class StudentsAddComponent implements OnInit {

  @Input() studentData = {Id: 0, Username: '', FirstName: '',LastName:'',Age: -1,Career:''};
  constructor(public rest: RestService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
  }
  addStudent(): void {
    this.rest.addStudent(this.studentData).subscribe((result) => {
      this.router.navigate(['/students-detail/' + result.id]);
    }, (err) => {
      console.log(err);
    });
  }
}
