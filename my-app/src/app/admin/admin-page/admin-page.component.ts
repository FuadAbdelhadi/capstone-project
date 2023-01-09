import { Component, OnInit, ViewChild } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import { startup } from 'src/app/end-user/startups';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { DataService } from '../services/data.service';
import { Observable, Observer } from 'rxjs';

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
  dataSource = new MatTableDataSource<startup>([]);
  columnsToDisplay = ['name','logo','sectors', 'approved'];
  displayedColumns=['Name','City','Sector','year','empNum','url','email','discription'];
  columnsToDisplayWithExpand = [...this.columnsToDisplay, 'expand'];
  expandedElement: startup | null | undefined;
  

  constructor( private data:DataService ) { 
    
  }
  
  ngOnInit(): void {
    this.data.getData().subscribe((value)=>{
      this.dataSource.data = value
    })
  }


  // applyFilter(event: Event) {
  //   const filterValue:startup['sectores'] = (event.target as HTMLInputElement).value;
  //   this.dataSource.filter = filterValue.trim().toLowerCase();

  //   if (this.dataSource.paginator) {
  //     this.dataSource.paginator.firstPage();
  //   }
  // }


  


}
