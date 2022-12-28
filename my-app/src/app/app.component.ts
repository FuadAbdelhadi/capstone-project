import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LandingPageComponent } from './end-user/landing-page/landing-page.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  constructor(private router: Router) {
    //image location
    
  }

  backtohome(){
    this.router.navigate(['/landing-page'])
  }

}
