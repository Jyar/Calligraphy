import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UntypedFormControl, UntypedFormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { LoginService } from '../services/login.service';
import { SoccerAPIService } from '../services/soccer-api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
login: boolean = false;

profileForm = new UntypedFormGroup({
  username: new UntypedFormControl({value: '', disabled: false, }, Validators.required),
  password: new UntypedFormControl({value: '', disabled: false},  Validators.required)
});

  constructor(private router: Router, private LoginService: LoginService, private soccerService: SoccerAPIService) {}

  ngOnInit(){ }

  loginF(){ }

  onSubmit() {

    // data needs to be sent from form
    var message = 'the message';
    // TODO: Use EventEmitter with form value
    this.LoginService.getLogin(message).subscribe(data => {
      console.log(data);
    });

    console.log(this.soccerService.getSoccer());

  }

  // loginFF(){
  //     this.router.navigate(['/'], {queryParams : {'isLoggedIn' : true} });
  // }

}
