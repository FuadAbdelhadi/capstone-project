import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-start-up-info',
  templateUrl: './start-up-info.component.html',
  styleUrls: ['./start-up-info.component.css']
})
export class StartUpInfoComponent implements OnInit{
  constructor(private router:Router, private route:ActivatedRoute){
    
  }
  backtohome(){
    this.router.navigate(['/landing-page'])
  }

  ngOnInit() {
    
   }


}
