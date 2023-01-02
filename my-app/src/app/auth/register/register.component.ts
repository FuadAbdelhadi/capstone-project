import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators, } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { passWordMatchingValidator } from '../validators/passwordMatchingValidator';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  form= new FormGroup({
    name : new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)]),
    confirmPassword : new FormControl('', [Validators.required, Validators.minLength(8)])
  }, {validators: [passWordMatchingValidator]})
  constructor(private auth:AuthService, private router:Router){}

  submit(){

    this.auth.signup(
      this.name?.value+'' ,
      this.email?.value+'',
      this.password?.value+''
    ).then((user)=> {this.router.navigate(['/landing-page'])
  console.log(user)})
    

  }
  get name(){
    return this.form.get("name")
  }

  get email(){
    return this.form.get("email")
  }
  get password(){
    return this.form.get("passowrd")
  }
  get confirmPassword(){
    return this.form.get("confirmPassword")
  }

}
