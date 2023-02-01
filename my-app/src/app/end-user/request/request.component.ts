import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from 'src/app/admin/services/data.service';
import { UploadService } from 'src/app/upload.service';
import { sector } from '../startups';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css']
})
export class RequestComponent implements OnInit{
form= new FormGroup({
  name: new FormControl('', [Validators.required]),
  City: new FormControl('', [Validators.required]),
  Sectors: new FormControl('', [Validators.required]),
  Founder: new FormControl('', [Validators.required]),
  Year: new FormControl('', [Validators.required]),
  employees: new FormControl('', [Validators.required, Validators.min(0)]),
  URL: new FormControl('', [Validators.required]),
  email: new FormControl('', [Validators.required, Validators.email]),
  
})
sectorsFilter? : sector[]
downLoadURL?:string

constructor(private data:DataService,public storage: UploadService, private router:Router){}
  ngOnInit(): void {
    this.data.getSectors().subscribe((value)=>{
      this.sectorsFilter = value
      
  })}

  upload(event: Event){
    let file = (event.target as HTMLInputElement)?.files?.[0];
    if(file){
      this.storage.uploadFile(file).subscribe((value)=>{
        this.downLoadURL = value
      })
    }
  }



get name(){
  return this.form.get("name")
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
 approved = false


submit(){
  this.data.addData(
    this.approved,
    this.name?.value+'',
    this.downLoadURL+'',
    this.City?.value+'',
    this.Sectors?.value+'',
    this.Founder?.value+'',
    this.Year?.value+'',
    this.employees?.value+'',
    this.URL?.value+'',
    this.email?.value+'' ,

  )
  
  this.router.navigate(['/landing-page'])
}





}
