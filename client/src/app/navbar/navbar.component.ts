import {Component, OnInit} from '@angular/core';
import {SearchComponent} from '../search/search.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  val = '';

  constructor() {
  }

  handleSubmit() {
  }

  handleInput(event) {
    this.val = event.target.value;
    console.log(this.val)
  }

  ngOnInit(): void {
  }
}
