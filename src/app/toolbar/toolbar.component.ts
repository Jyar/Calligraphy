import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  @Output() drawerEvent = new EventEmitter<boolean>();
  drawer: boolean = false;
  defaultPage: boolean = true;
  
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  ngOnChanges(){
    (this.router.url == 'profile') ? this.defaultPage = false : this.defaultPage = true;
    console.log(this.router);
  }

  toggleDrawer(){
    this.drawerEvent.emit(!this.drawer);
  }

}
