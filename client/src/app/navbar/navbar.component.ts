import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit  {
  isopen : Boolean = false ;
  constructor() {
    
   }
   ngOnInit(): void {
  }
  // when we minimise the browser to check elements in it must toggle the button  
  toggleNavBar(){
    this.isopen= !this.isopen;
  }

}
