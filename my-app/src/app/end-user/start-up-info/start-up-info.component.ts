import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-start-up-info',
  templateUrl: './start-up-info.component.html',
  styleUrls: ['./start-up-info.component.css']
})
export class StartUpInfoComponent {
  constructor(private router:Router){
    
  }
  backtohome(){
    this.router.navigate(['/landing-page'])
  }

}
