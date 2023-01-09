import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/admin/services/data.service';
import { startup } from '../startups';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
  constructor(private router: Router,private data: DataService) {
    //image location
    this.image1 = "src\assets\images\image1.jpg"
  }
  @ViewChild('content', {static:false}) el!: ElementRef;
  startups:startup[]=[];
  image1: string;
  
  
  ngOnInit() {
  
    this.data.getData().subscribe((value)=>{
      this.startups = value
    })
  }
  
  
  navitoinfo(){
    this.router.navigate(['/start-up-info'])
  }




  // makePDF(){
  //   let pdf = new jsPDF('p','pt', 'a4');
  //   pdf.html(this.el.nativeElement,{
  //     callback: (pdf)=>{
  //       pdf.save("demo.pdf")
  //     }
  //   })
  // }
  
  
  
  

  // this.CompService.navitoinfo(id:number){
  //   this.startups.forEach(value =>{
  //     if(value.id){
  //       this.router.navigate(['/start-uo-info/'+value])
  //     }
  //   })

  
    
  }

  
//   share(){
//     if(navigator.share){
//       navigator.share({
//         title:'share',
//         url:'https://github.com/FuadAbdelhadi'
//       }).then(()=>{
//         console.log('thanks for sharing')
//       })
//       .catch(console.error)
//     }
//   }
// }


