import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators, } from '@angular/forms';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css']
})
export class RequestComponent {
form= new FormGroup({
  name: new FormControl('', [Validators.required]),
  logo: new FormControl('', [Validators.required]),
  Discription: new FormControl('', [Validators.required]),
  City: new FormControl('', [Validators.required]),
  Sectors: new FormControl('', [Validators.required]),
  Founder: new FormControl('', [Validators.required]),
  Year: new FormControl('', [Validators.required]),
  employees: new FormControl('', [Validators.required, Validators.min(0)]),
  URL: new FormControl('', [Validators.required]),
  email: new FormControl('', [Validators.required, Validators.email])
})
get name(){
  return this.form.get("name")
}
get logo(){
  return this.form.get("logo")
}
get Discription(){
  return this.form.get("Discription")
}
get City(){
  return this.form.get("City")
}
get Sectors(){
  return this.form.get("Sectors")
}
get Founder(){
  return this.form.get("Founder")
}
get Year(){
  return this.form.get("Year")
}
get employees(){
  return this.form.get("employees")
}
get URL(){
  return this.form.get("URL")
}
get email(){
  return this.form.get("email")
}


submit(){
  
}

}
