import { Component, OnInit, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';

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
  idCourse;
  courses = <any>[];
  constructor(
    private http: HttpClient,
    private router: Router,
    private activatedRote: ActivatedRoute
  ) {
    console.log('Called Constructor');
  }

  getAllCourses() {
    let data = this.http.get<any>(baseUrl);
    return data;
  }

  getID(id) {
    return id;
  }

  public goToCourse(url, id) {
    this.router.navigate(['courses', id]);

    // // course/1
    // var myUrl = `${url}/${id}`;
    // this.idCourse = id;
    // this.getID(this.idCourse);
    // this.router.navigateByUrl(myUrl).then((e) => {
    //   if (e) {
    //     console.log('Navigation is successful!');
    //   } else {
    //     console.log('Navigation has failed!');
    //   }
    // });
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
