import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { error } from 'protractor';

let serverUrl = 'http://localhost:8080/courses';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  data = <any>[];
  constructor(private http: HttpClient) {}
  getCourses() {
    return this.http.get(serverUrl).subscribe((data) => {
      this.data = data;
    });
  }

  filterData() {}

  ngOnInit(): void {
    this.getCourses();
  }
}
