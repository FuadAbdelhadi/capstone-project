import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable } from '@firebase/util';
import { users } from '../users-list';
@Injectable({
  providedIn: 'root'
})
export class UsersListService {
  private user! : AngularFirestoreCollection<users>;
  
  

  constructor(private fireStore: AngularFirestore, private fireAuth:AngularFireAuth) { 
    
  }

  toggleAdmin(id:string, updateAdmin:users){
    return this.fireStore.collection<users>('users').doc<users>(id).update({...updateAdmin})
  }

  Delete(id:string){
     this.fireStore.collection<users>('users').doc<users>(id).delete()
  }

  getuser(){

    return this.fireStore
    .collection<users>
    ('users').valueChanges(); 
}
getUserById(id: string){
  return this.fireStore
  .collection<users>
  ('users').doc(id).valueChanges();
}
}
