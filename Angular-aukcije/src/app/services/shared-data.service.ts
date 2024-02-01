import { Injectable } from '@angular/core';
import { Subject,BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {
private dataTrenutnaCena=new BehaviorSubject<number>(1);
data$=this.dataTrenutnaCena.asObservable();
  constructor() { }
  updateData(newData:number){
    this.dataTrenutnaCena.next(newData);
  }
}
