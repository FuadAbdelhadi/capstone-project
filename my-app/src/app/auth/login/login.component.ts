import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators, } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  form= new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  })
  constructor(private auth:AuthService, private router:Router){}

// a problem with the signin button (doesnt check password)

  submit(){

    this.auth.signin(
      this.email?.value+'',
      this.password?.value+''
    ).then(()=> this.router.navigate(['/landing-page']))
    .catch((error)=>console.log(error))

  }

  get email(){
    return this.form.get("email")
  }
  get password(){
    return this.form.get("password")
  }
 


}
