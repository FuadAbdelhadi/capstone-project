import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { map, Observable, startWith } from 'rxjs';
import { DataService } from 'src/app/admin/services/data.service';
import { startup } from '../startups';
import { MatDialog} from '@angular/material/dialog';
import { StartUpInfoComponent } from '../start-up-info/start-up-info.component';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
  startupByName!:string[];
  myControl = new FormControl('');
  options!: string[];
  filteredOptions?: Observable<string[]>;
  constructor(private data: DataService, public dialog: MatDialog) {
    
    //image location
    this.image1 = "src\assets\images\image1.jpg"
  }
  @ViewChild('content', {static:false}) el!: ElementRef;
  startup:startup[]=[];
  startup$!: Observable<startup | undefined | unknown>;
  id!:string
  image1: string;
  sectorsFilter? : string[]
  form = new FormGroup ({
    sectors: new FormControl('')

  })
  all:string = 'all'
  active:number = 0

 
  
  
  ngOnInit() {

   

    

    const observer = new IntersectionObserver((entries)=>{
      entries.forEach((entry)=> {
        if(entry.isIntersecting){
          entry.target.classList.add('show')
        }else{
          entry.target.classList.remove('show')
        }
      })
    })

    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach((el)=> observer.observe(el));

  
  
    this.data.getData(true).subscribe((value)=>{
      this.startup = value;
      this.options = value.map((startup)=> startup.name);
      this.sectorsFilter = value.map((startup)=> startup.sectors);
      console.log(this.startupByName);

      this.filteredOptions = this.myControl.valueChanges.pipe(
        startWith(''),
        map(value => this._filter(value || '')),
      );
  
    })
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

  isActive(){
    if(this.active === 0){
      this.active = this.active+1
    }else{
      this.active = this.active-1
    }
  }

  filter(){
    if(this.sectors?.value == this.all){
      this.data.getData(true).subscribe((value)=>{
        return this.startup = value
      })

    }else{
      this.data.getData(true).pipe(
       map((startups : startup[])=>{
         return startups.filter((startup)=> startup.sectors.indexOf(this.sectors?.value+ '') != -1)
      })).subscribe((startups)=> {this.startup = startups});
    }
  }
  
  search(){
    

      this.startup = this.startup.filter((el)=>{
        return el.name == this.name?.value+''
      })
      console.log(this.startup)


      // this.data.getData(true).pipe(
      //   map((startups : startup[])=>{
      //     return startups.filter((startup)=> startup.name.indexOf(this.name?.value+ '') != -1)
      //  })).subscribe((startups)=> {this.startup = startups});
     
    
  }
  
  get sectors(){
    return this.form.get("sectors")
  }

  get name(){
    return this.form.get("myControl")
  }
  



  openDialog(startup: startup, enterAnimationDuration: string, exitAnimationDuration: string) {
  
    this.dialog.open(StartUpInfoComponent, {
      enterAnimationDuration,
      exitAnimationDuration,
      width: '60vw',
      height: '60vh',
      data: {
        ... startup

      },
    });
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


