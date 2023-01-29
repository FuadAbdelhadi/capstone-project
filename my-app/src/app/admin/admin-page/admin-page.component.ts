import { Component, OnInit, ViewChild } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import { sector, startup } from 'src/app/end-user/startups';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { DataService } from '../services/data.service';
import { FormControl, FormGroup } from '@angular/forms';
import { map, Observable, Observer } from 'rxjs';
import { approval } from '../approval';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class AdminPageComponent implements OnInit{
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  searchText:any=''
  dataSourceApproved = new MatTableDataSource<startup>([]);
  dataSourceNotApproved = new MatTableDataSource<startup>([]);
  columnsToDisplay = ['name','logo','sectors', 'approved', 'approve', 'delete'];
  displayedColumns=['Name','City','Sector','year','empNum','url','email','discription'];
  columnsToDisplayWithExpand = [...this.columnsToDisplay, 'expand'];
  expandedElement: startup | null | undefined;
  startup:startup[]=[];
  sectorsFilter? : sector[]
  form = new FormGroup ({
    sectors: new FormControl('')
  })
  all:string = 'all'
  

  constructor( private data:DataService ) { 
    
  }
  
  ngOnInit(): void {
    this.data.getData(true).subscribe((value)=>{
      this.dataSourceApproved.data = value
    })
    this.data.getData(false).subscribe((value)=>{
      this.dataSourceNotApproved.data = value
    })
    this.data.getSectors().subscribe((value)=>{
      this.sectorsFilter = value
      
  })
  }

  toggleApproval(approve:startup){
    approve.approved= !approve.approved
    this.data.toggleAproval(approve.id+'', approve)
  }

  delete(id:string){
    this.data.Delete(id)
  }

  get sectors(){
    return this.form.get("sectors")
  }

  filter(){
    if(this.sectors?.value == this.all){
      this.data.getData(true).subscribe((value)=>{
        return this.dataSourceNotApproved.data = value
      })

    }else{
      this.data.getData(true).pipe(
       map((startups : startup[])=>{
         return startups.filter((startup)=> startup.sectors.indexOf(this.sectors?.value+ '') != -1)
      })).subscribe((startups)=> {this.dataSourceNotApproved.data = startups});
    }}


  // applyFilter(event: Event) {
  //   const filterValue:startup['sectores'] = (event.target as HTMLInputElement).value;
  //   this.dataSource.filter = filterValue.trim().toLowerCase();

  //   if (this.dataSource.paginator) {
  //     this.dataSource.paginator.firstPage();
  //   }
  // }


  


}
