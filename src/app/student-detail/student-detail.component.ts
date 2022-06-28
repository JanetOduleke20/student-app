import { Component, OnInit, Input } from '@angular/core';
import { BehaviourService } from '../behaviour.service';

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.css']
})
export class StudentDetailComponent implements OnInit {
@Input() currentStudent:any

  constructor(public behaviourService: BehaviourService) { }
  ngOnInit(): void {
    // this.behaviourService.student.subscribe(response =>{
    //   this.student = response;
    // })
  }

}
