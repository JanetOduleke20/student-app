import { Component, OnInit } from '@angular/core';
import { StudentsService } from '../students.service';
import { BehaviourService } from '../behaviour.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
  public current:any
  public students:any;

  constructor(public behaviourService: BehaviourService) { }

  ngOnInit(): void {
    // this.studentService.getStudents().subscribe(data => {
    //   this.students = data;
    // })
    this.students = JSON.parse(localStorage.getItem("Students")!)
  }
  viewStudent(student:any) {
    // this.behaviourService.student.next(i)
    this.current = student;
  }

}
