import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { sector, startup } from 'src/app/end-user/startups';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private fireStore: AngularFirestore) { }

  getData(isApproved: boolean){
    return this.fireStore.collection<startup>('start-ups', ref=> ref.where('approved','==',isApproved)).valueChanges()
  }

  getDataById(id:string){
    return this.fireStore.collection('users').doc(id).valueChanges()
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

  getSectors(){
    return this.fireStore.collection<sector>('sectors').valueChanges()
  }

  getSectorByName(name:string){
    return this.fireStore.collection<sector>('sectors', ref => ref.where('name', '==', name)).valueChanges()
  }

}
