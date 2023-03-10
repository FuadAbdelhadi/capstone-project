import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth/services/auth.service';
import { companies } from 'src/companies';
import { DataService } from './admin/services/data.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'my-app';
  admin?: boolean = false;
  userstate$= this.auth.userstate$
  
  constructor(private router: Router, public auth:AuthService, public dataService: DataService) {
       
    
  }
  ngOnInit(): void {
    


    this.auth.userstate$
    .subscribe((value)=>{
      if (value){
        //get user from collection 

        this.admin= value.admin
      }
    })
   
  }

  backtohome(){
    this.router.navigate(['/landing-page'])
  }

  logout(){
    this.auth.signout().then(()=>{
      this.router.navigate(['/auth/login'])
    })
  }

  

}
