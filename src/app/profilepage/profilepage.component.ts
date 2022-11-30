import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
@Component({
  selector: 'app-profilepage',
  templateUrl: './profilepage.component.html',
  styleUrls: ['./profilepage.component.css']
})
export class ProfilepageComponent implements OnInit {

  selected = 'option2';


  contactForm = new FormGroup({
    name: new FormControl({value: '', disabled: false, }, Validators.required),
    email: new FormControl({value: '', disabled: false},  Validators.required)
  });

  constructor() { }

  ngOnInit(): void {
  }

  contactFormSubmit(){ }

  onSubmit() {

    // data needs to be sent from form
    var message = 'the message';
    // TODO: Use EventEmitter with form value
   

  }

}
