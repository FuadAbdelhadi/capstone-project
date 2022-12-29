import { Component } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import { startup } from 'src/app/end-user/startups';

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
export class AdminPageComponent {
  searchText:any=''
  dataSource = ELEMENT_DATA;
  columnsToDisplay = ['name','logo','sectors'];
  displayedColumns=['Name','City','Sector','year','empNum','url','email','discription'];
  columnsToDisplayWithExpand = [...this.columnsToDisplay, 'expand'];
  expandedElement: startup | null | undefined;

  // applyFilter(event: Event) {
  //   const filterValue:startup['sectores'] = (event.target as HTMLInputElement).value;
  //   this.dataSource.filter = filterValue.trim().toLowerCase();

  //   if (this.dataSource.paginator) {
  //     this.dataSource.paginator.firstPage();
  //   }
  // }

}
const ELEMENT_DATA:startup[]=[{
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
}]