import { trigger, state, style, transition, animate } from '@angular/animations';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { MatTableDataSource } from '@angular/material/table';
import { UsersListService } from '../services/users-list.service';
import { users } from '../users-list';
import { MatPaginator } from '@angular/material/paginator';
import { AuthService } from 'src/app/auth/services/auth.service';
import { of, switchMap } from 'rxjs';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
  
})
export class UsersListComponent implements  AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  user:users[]= []
  dataSource=new MatTableDataSource<users>([])
  columnsToDisplay = ['name','admin', 'email'];
  displayedColumns=['approve', 'delete'];
  columnsToDisplayWithExpand = [...this.columnsToDisplay, 'expand'];
  expandedElement: users | null | undefined;
  
  constructor( private fs:AngularFirestore, private UserService:UsersListService, private authService:AuthService ) { }


  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }
  ngOnInit(): void {
    
  this.UserService.getuser().subscribe((response)=> {
    if(response){

      
      //this.dataSource.data = response.filter((v)=> v.userId == ""); //client-side filter 
      this.dataSource.data = response;
    }
  })

  }

  toggleAdmin(admin:users){
    console.log(admin);
    admin.admin = !admin.admin
    
    this.UserService.toggleAdmin(admin?.id+ '', admin)
  }

  deleteUser(id:string){
    this.UserService.Delete(id)
  }

}

