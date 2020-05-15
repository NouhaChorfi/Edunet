import { Component, OnInit, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const baseUrl = 'http://localhost:8080/teachers';

// @Injectable({
//   providedIn: 'root',
// })
@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.scss'],
})
export class TeachersComponent implements OnInit {
  teachers = <any>[];
  constructor(private http: HttpClient) {
    console.log('Called Constructor');
  }
  getAllTeachers() {
    let data = this.http.get(baseUrl);
    console.log('dataaa', data);
    return data;
  }

  ngOnInit(): void {
    this.getAllTeachers().subscribe(
      (result) => {
        console.log('results teachers ', result);
        this.teachers = result;
      },
      (error) => {
        console.log('Error Fetching Teachers', error);
      }
    );
  }
}
