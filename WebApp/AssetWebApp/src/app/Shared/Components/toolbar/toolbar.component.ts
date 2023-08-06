import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})

export class ToolbarComponent implements OnInit {

@Input() sidenav: any;
@Input() sidebar: any;
@Input() drawer: any;
@Input() matDrawerShow: any;

searchOpen: boolean = false;
// toolbarHelpers = ToolbarHelpers;

constructor() { }

ngOnInit() {
}

toggle(){
  
}

}
