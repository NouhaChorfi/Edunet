import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

const serverUrl = "http"

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
