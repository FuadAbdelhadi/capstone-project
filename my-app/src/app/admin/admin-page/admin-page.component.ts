import { Component, OnInit, ViewChild } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import { startup } from 'src/app/end-user/startups';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { DataService } from '../services/data.service';
import { Observable, Observer } from 'rxjs';
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
  

  constructor( private data:DataService ) { 
    
  }
  
  ngOnInit(): void {
    this.data.getData(true).subscribe((value)=>{
      this.dataSourceApproved.data = value
    })
    this.data.getData(false).subscribe((value)=>{
      this.dataSourceNotApproved.data = value
    })
  }

  toggleApproval(approve:startup){
    approve.approved= !approve.approved
    this.data.toggleAproval(approve.id+'', approve)
  }

  delete(name:string){
    this.data.Delete(name)
  }


  // applyFilter(event: Event) {
  //   const filterValue:startup['sectores'] = (event.target as HTMLInputElement).value;
  //   this.dataSource.filter = filterValue.trim().toLowerCase();

  //   if (this.dataSource.paginator) {
  //     this.dataSource.paginator.firstPage();
  //   }
  // }


  


}
