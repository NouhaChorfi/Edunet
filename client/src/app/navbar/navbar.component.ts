import { Component} from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent  {
  number =0
  constructor() {
    setInterval(()=>{
      this.number++
    },1000)
   }

 

}