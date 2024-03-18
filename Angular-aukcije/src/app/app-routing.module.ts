import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { FollowPageComponent } from './follow-page/follow-page.component';
import { ContactComponent } from './contact/contact.component';
import { ItemPageComponent } from './item-page/item-page.component';
import { UserComponent } from './user/user.component';
import { CartComponent } from './cart/cart.component';
import { AuctionsResolver, BidsResolver, ItemsResolver, UserItemResolver, UserResolver } from './my-resolver.resolver';
const routes: Routes = [
  { path: '', component: HomeComponent, resolve: { auctionsData: AuctionsResolver,itemsData:ItemsResolver }},
  { path: 'search/:searchTerm', component: HomeComponent,resolve: { auctionsData: AuctionsResolver,itemsData:ItemsResolver } },
  { path: 'filtration/:filtrationTerm', component: HomeComponent,resolve: { auctionsData: AuctionsResolver,itemsData:ItemsResolver } },
  { path: 'user-login', component: UserLoginComponent },
  { path: 'follow-page', component: FollowPageComponent,resolve: { auctionsData: AuctionsResolver,itemsData:ItemsResolver,bidsData:BidsResolver } },
  { path: 'item/:id', component: ItemPageComponent,resolve: {usersData:UserResolver ,bidsData:BidsResolver } },
  { path: 'contact/:id', component: ContactComponent },
  { path: 'user/:id', component: UserComponent ,resolve: {userItemsData: UserItemResolver,usersData:UserResolver }},
  { path: 'cart', component: CartComponent,resolve: { auctionsData: AuctionsResolver,itemsData:ItemsResolver,bidsData:BidsResolver } },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
