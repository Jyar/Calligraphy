import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  @Output() drawerEvent = new EventEmitter<boolean>();
  drawer: boolean = false;
  
  constructor() { }

  ngOnInit(): void {
  }

  toggleDrawer(){
    this.drawerEvent.emit(!this.drawer);
  }

}
