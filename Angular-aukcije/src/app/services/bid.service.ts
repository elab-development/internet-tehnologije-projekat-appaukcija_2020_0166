import { Injectable } from '@angular/core';
import { Bid } from '../models/bid';
import { LoginResponse } from '../user-login/login-response';
import { GetBidsService } from '../get-bids/get-bids.service';
@Injectable({
  providedIn: 'root'
})
export class BidService {
  public user!: LoginResponse | null;
  userToken!: string;
  public data: Bid[] = [
    
  ];
  constructor(private getBidsService:GetBidsService) {
    this.setBids();
  }

  getItemById(id: number): Bid {
    return this.getAll().find(bid => bid.id == id)!;
  }


  update(bid: Bid): Bid {
    let bidToUpdate = this.data.find(e => e.id == bid.id)!;
    bidToUpdate.auction_id = bid.auction_id;
    bidToUpdate.id = bid.id;
    bidToUpdate.iznos = bid.iznos;
    bidToUpdate.user_id = bid.user_id;
    return bidToUpdate;
  }

  getAll(): Bid[] {
    return this.data;
  }

  setBids() {
  
    this.user = JSON.parse(localStorage.getItem('user')!) as LoginResponse;
    this.userToken = this.user.access_token;
    this.getBidsService.getBids(this.userToken).subscribe
      (response => {

        this.data=response;
        


      }, error => { console.log(error); });

  

  
}
}
