import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  implements OnInit {
  @Input() isVisible : boolean = true;
  visibility = 'shown';
  sideNavOpened: boolean = true;
  matDrawerOpened: boolean = false;
  matDrawerShow: boolean = true;
  sideNavMode: string = 'side';
  ngOnChanges() {
    this.visibility = this.isVisible ? 'shown' : 'hidden';
   }
 
   constructor() { }
 
   ngOnInit() {

   }

 

 
}
