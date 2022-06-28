import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  constructor() { }
  getStudents() {
    let data:any = []
    data = JSON.parse(localStorage.getItem("Students")!);
    return data;
  }
}
