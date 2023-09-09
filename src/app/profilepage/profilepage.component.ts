import { Component, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
@Component({
  selector: 'app-profilepage',
  templateUrl: './profilepage.component.html',
  styleUrls: ['./profilepage.component.css']
})
export class ProfilepageComponent implements OnInit {

  selected = 'option2';


  contactForm = new UntypedFormGroup({
    name: new UntypedFormControl({value: '', disabled: false, }, Validators.required),
    email: new UntypedFormControl({value: '', disabled: false},  Validators.required)
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
