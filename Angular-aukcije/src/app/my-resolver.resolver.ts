import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { DataServiceService } from './services/data-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuctionsResolver implements Resolve<any> {
  constructor(private dataService: DataServiceService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    return this.dataService.getAuctions();
  }
}
@Injectable({
  providedIn: 'root'
})
export class ItemsResolver implements Resolve<any> {
  constructor(private dataService: DataServiceService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    return this.dataService.getItems(); 
  }
}
