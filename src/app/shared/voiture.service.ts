import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})
export class VoitureService {
  constructor(private firestore: AngularFirestore) { }

  getVoitures(){
    //return this.firestore.collection('voitures').valueChanges();
    return this.firestore.collection('voitures').snapshotChanges();
  }
      createVoiture(v){
        return this.firestore.collection('voiture').add(v);
      }
      deleteStagaire(id){
        return this.firestore.collection('voitures').doc(id).delete();
      }
}
