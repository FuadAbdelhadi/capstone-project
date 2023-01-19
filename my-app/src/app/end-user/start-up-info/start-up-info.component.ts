import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MAT_DIALOG_DATA} from '@angular/material/dialog';
import { startup } from '../startups';

@Component({
  selector: 'app-start-up-info',
  templateUrl: './start-up-info.component.html',
  styleUrls: ['./start-up-info.component.css']
})
export class StartUpInfoComponent implements OnInit{
  startup!: startup
  constructor( @Inject(MAT_DIALOG_DATA) public data:startup, private router:Router, private route:ActivatedRoute,){
    this.startup = data;
  }
  backtohome(){
    this.router.navigate(['/landing-page'])
  }

  ngOnInit() {
    console.log(this.data)
    
   }


}
