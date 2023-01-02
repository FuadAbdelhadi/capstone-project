import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import {from} from 'rxjs'
import { users } from 'src/app/admin/users-list';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private fireAuth:AngularFireAuth, private fs:AngularFirestore ) { }


  signin(email:string , password:string){

   return this.fireAuth.signInWithEmailAndPassword(email,password); 
   
    
  }

  signup(email:string, password:string, name:string){
    return this.fireAuth.createUserWithEmailAndPassword(email,password).then((val)=>{
      let user : users ={
        id : val.user?.uid,
        name : name,
        
      }
      this.fs.collection<users>('users').doc(val.user?.uid).set(user)
    })
    
  }
}
