import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  @ViewChild('drawer') drawer: any;
  showFiller = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleDrawer($event: boolean){
    console.log($event);
    this.drawer.toggle()
  }

}
