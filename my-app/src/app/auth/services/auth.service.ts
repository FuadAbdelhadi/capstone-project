import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/compat/auth';
import {from} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private fireAuth:AngularFireAuth) { }


  signin(email:string , password:string){

   return this.fireAuth.signInWithEmailAndPassword(email,password); 
   
    
  }

  signup(email:string, password:string){
    return this.fireAuth.createUserWithEmailAndPassword(email,password);
  }
}
