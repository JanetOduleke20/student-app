import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  public firstname = "";
  public lastname = "";
  public email = "";
  public password = "";
  public department = "";

  public studentObj = {}
  public studentArray:any = []
  public message = "";

  constructor(public router: Router) { }

  ngOnInit(): void {
    this.studentArray = JSON.parse(localStorage.getItem("Students")!)
  }
  signup() {
    this.studentObj = {firstname: this.firstname, lastname: this.lastname, email: this.email, password: this.password, department: this.department}
    this.studentArray.push(this.studentObj);
    console.log(this.studentArray)
    localStorage.setItem("Students", JSON.stringify(this.studentArray));
    this.router.navigate(['/students'])
  }

}
