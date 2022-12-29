import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { startup } from '../startups';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
  constructor(private router: Router) {
    //image location
    this.image1 = "src\assets\images\image1.jpg"
  }
  @ViewChild('content', {static:false}) el!: ElementRef;
  startups:startup[]=[{
    id: 1,
    name: "fuad",
    logo: 'https://www.generatormix.com/images/logo/batman.jpg',
    discription:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus commodi, quasi, ea ipsam placeat dicta harum laboriosam provident ducimus, magnam tempora fugit vero omnis qui? Vel voluptatibus minima rerum consectetur.",
    city: "irbid",
    sectors: "aoutomotive",
    founderName: "rajeh",
    year: "1999",
    empNum: 2500,
    url: "https://github.com/FuadAbdelhadi",
    email:"fuadrabdelhadi@gmail.com"
  } ,];
  image1: string;

   
 
  
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
  
  
  
  
  ngOnInit() {
  }

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


