import { Injectable } from '@angular/core';
import {AngularFireStorage} from '@angular/fire/compat/storage';
import { last, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UploadService {
 constructor(private fireStorage: AngularFireStorage) {

 }

 uploadFile(file:File){
  const filePath = `logos/${file.name}`;
  const storageRef = this.fireStorage.ref(filePath);
  let downloadTask = storageRef.put(file).snapshotChanges()
  .pipe(
    last(),
    switchMap((val)=>{
      return storageRef.getDownloadURL()
    })
  )
  return downloadTask;
 }


}