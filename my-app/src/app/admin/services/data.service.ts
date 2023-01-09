import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { startup } from 'src/app/end-user/startups';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private fireStore: AngularFirestore) { }

  getData(){
    return this.fireStore.collection<startup>('start-ups').valueChanges()
  }

  addData(_approved:boolean, name:string, logo:string, Discription:string, City:string, Sectors:string, Founder:string, Year:string, employees:string, URL:string, email:string ){
    let comp:startup = {
      approved : false,
      name : name,
      logo:logo,
      discription:Discription ,
      city:City,
      sectors:Sectors,
      founderName:Founder,
      year:Year,
      empNum:employees,
      url:URL,
      email:email

    }
    return this.fireStore.collection<startup>('start-ups').add(comp)
  }

}
