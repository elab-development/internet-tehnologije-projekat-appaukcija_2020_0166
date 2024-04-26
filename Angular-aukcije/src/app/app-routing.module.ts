import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { FollowPageComponent } from './follow-page/follow-page.component';
import { ContactComponent } from './contact/contact.component';
import { ItemPageComponent } from './item-page/item-page.component';
import { UserComponent } from './user/user.component';
import { CartComponent } from './cart/cart.component';
import { AuctionsResolver, BidsResolver, ItemsResolver, MoneyResolver, UserItemResolver, UserResolver } from './my-resolver.resolver';
import { ChartPageComponent } from './cart-page/chart-page.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { GetMoneyService } from './get-money.service';
const routes: Routes = [
  { path: '', component: HomeComponent, resolve: { auctionsData: AuctionsResolver,itemsData:ItemsResolver }},
  { path: 'search/:searchTerm', component: HomeComponent,resolve: { auctionsData: AuctionsResolver,itemsData:ItemsResolver } },
  { path: 'filtration/:filtrationTerm', component: HomeComponent,resolve: { auctionsData: AuctionsResolver,itemsData:ItemsResolver } },
  { path: 'sort/:sortTerm', component: HomeComponent,resolve: { auctionsData: AuctionsResolver,itemsData:ItemsResolver } },
  { path: 'user-login', component: UserLoginComponent },
  { path: 'follow-page', component: FollowPageComponent,resolve: { auctionsData: AuctionsResolver,itemsData:ItemsResolver,bidsData:BidsResolver } },
  { path: 'item/:id', component: ItemPageComponent,resolve: {usersData:UserResolver ,bidsData:BidsResolver,moneyData:MoneyResolver } },
  { path: 'contact/:id', component: ContactComponent },
  { path: 'chart-page', component: ChartPageComponent,resolve: {bidsData:BidsResolver } },
  { path: 'user/:id', component: UserComponent ,resolve: {userItemsData: UserItemResolver,usersData:UserResolver }},
  { path: 'cart', component: CartComponent,resolve: { auctionsData: AuctionsResolver,itemsData:ItemsResolver,bidsData:BidsResolver } },
  { path: 'forget-password', component: ForgetPasswordComponent,resolve: {usersData:UserResolver } },
  { path: 'reset-password', component:ResetPasswordComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
