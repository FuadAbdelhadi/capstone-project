import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth/services/auth.service';
import { users } from './admin/users-list';
import { UsersListService } from './admin/services/users-list.service';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'my-app';
  admin?: boolean = false;
  userstate$= this.auth.userstate$
  constructor(private router: Router, public auth:AuthService, private userService: UsersListService) {
    //image location
    
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
