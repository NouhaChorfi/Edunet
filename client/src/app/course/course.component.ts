import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CoursesComponent } from '../courses/courses.component';
import { from } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss'],
})
export class CourseComponent implements OnInit {
  course = <any>[];
  videos = <any>[];
  constructor(
    private http: HttpClient,
    private activatedRoute: ActivatedRoute,
    private sanitizer: DomSanitizer
  ) {}

  getCourse(id) {
    return this.http.get<any>(`http://localhost:8080/courses/${id}`);
  }
  transform(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  ngOnInit(): void {
    let id = this.activatedRoute.snapshot.params['id'];
    this.getCourse(id).subscribe(
      (result) => {
        console.log('ress', result);
        this.course = result;
        this.videos = result.video;
        //this.transform(result.video[0].url);
      },
      (error) => {
        console.log('error fetching course', error);
      }
    );
  }
}
