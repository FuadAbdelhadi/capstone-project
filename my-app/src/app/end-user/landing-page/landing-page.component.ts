import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { filter, map, Observable, switchMap } from 'rxjs';
import { DataService } from 'src/app/admin/services/data.service';
import { sector, startup } from '../startups';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
  constructor(private router: Router,private data: DataService, private route:ActivatedRoute) {
    //image location
    this.image1 = "src\assets\images\image1.jpg"
  }
  @ViewChild('content', {static:false}) el!: ElementRef;
  startup:startup[]=[];
  startup$!: Observable<startup | undefined | unknown>;
  id!:string
  image1: string;
  sectorsFilter? : sector[]
  form = new FormGroup ({
    sectors: new FormControl('')
  })
  
  
  ngOnInit() {

    this.data.getSectors().subscribe((value)=>{
      this.sectorsFilter = value
      
  })
  
    this.data.getData(true).subscribe((value)=>{
      this.startup = value
    })
  }

  filter(){
   
   this.data.getData(true).pipe(
    map((startups : startup[])=>{
      return startups.filter((startup)=> startup.sectors.indexOf(this.sectors?.value+ '') != -1)
   })).subscribe((startups)=> {this.startup = startups});
   

   //you don't update data on filter 
  }
  
  get sectors(){
    return this.form.get("sectors")
  }
  
  navitoinfo(){

    this.startup$ = this.route.paramMap.pipe(
      switchMap((value)=>{
        this.id = value.get('id')+''
        return this.data.getDataById(this.id)
      })
    )




    this.router.navigate(['/start-up-info', this.id])
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


