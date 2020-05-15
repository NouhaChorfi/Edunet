import { Component, OnInit, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const baseUrl = 'http://localhost:8080/courses';

// @Injectable({
//   providedIn: 'root',
// })
@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent implements OnInit {
  courses = <any>[];
  constructor(private http: HttpClient) {
    console.log('Called Constructor');
  }

  getAllCourses() {
    let data = this.http.get<any>(baseUrl);
    return data;
  }
  ngOnInit(): void {
    console.log('Called ONINIT');
    this.getAllCourses().subscribe(
      (result) => {
        console.log('results Courses ', result);
        this.courses = result;
      },
      (error) => {
        console.log('Error Fetching Couses', error);
      }
    );
  }

  text: String;
}
