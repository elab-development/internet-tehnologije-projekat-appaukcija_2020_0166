import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable, of, switchMap, throwError } from 'rxjs';
import { DataServiceService } from './services/data-service.service';
import { UserItemService } from './user-item/user-item.service';
import { GetMoneyService } from './get-money.service';
import { AuthServiceService } from './authservice';

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
@Injectable({
  providedIn: 'root'
})
export class MoneyResolver implements Resolve<number> {

  constructor(private getMoneyService: GetMoneyService, private authService: AuthServiceService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    const user = this.authService.getUser();

    if (user && user.user_id) {
      const userId = user.user_id;

      
      
      return this.getMoneyService.GetMoney(userId);
    } else {
      
      return of(0);
    }
  }
}



