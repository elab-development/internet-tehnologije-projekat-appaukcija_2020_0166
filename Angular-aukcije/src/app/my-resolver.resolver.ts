import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { DataServiceService } from './services/data-service.service';
import { UserItemService } from './user-item/user-item.service';

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
@Injectable({
  providedIn: 'root'
})
export class BidsResolver implements Resolve<any> {
  constructor(private dataService: DataServiceService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    return this.dataService.getBids(); 
  }
}
@Injectable({
  providedIn: 'root'
})
export class UserResolver implements Resolve<any> {
  constructor(private dataService: DataServiceService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    return this.dataService.getUsers();
  }
}
@Injectable({
  providedIn: 'root'
})
export class UserItemResolver implements Resolve<any> {
  constructor(private userItemService:UserItemService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    const userId = route.params['id'];
    if (!userId || isNaN(userId)) {
      
      console.error('Invalid user_id provided');
      return throwError('Invalid user_id provided');
    }
    return this.userItemService.getItemsUser(userId);
  }

}

