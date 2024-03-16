import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { HeaderComponent } from './header/header.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { FollowPageComponent } from './follow-page/follow-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button'
import { MatIconModule } from '@angular/material/icon'
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { ContactComponent } from './contact/contact.component';
import { ItemPageComponent } from './item-page/item-page.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ItemReusableComponent } from './item-reusable/item-reusable.component';
import { FooterComponent } from './footer/footer.component';
import { CapitalizePipe } from './capitalize.pipe';
import { AtributskaDirektivaDirective } from './atributska-direktiva.directive';
import {NgxPaginationModule} from 'ngx-pagination';
import { UserComponent } from './user/user.component';
import { CartComponent } from './cart/cart.component';
import { AddItemDialogComponent } from './add-item-dialog/add-item-dialog.component';
import { DatePipe } from '@angular/common';
import { AuthInterceptor } from './auth.interceptor';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    HeaderComponent,
    UserLoginComponent,
    FollowPageComponent,
    ContactComponent,
    ItemPageComponent,
    ItemReusableComponent,
    FooterComponent,
    CapitalizePipe,
    AtributskaDirektivaDirective,
    UserComponent,
    CartComponent,
    AddItemDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatButtonToggleModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule,
    NgxPaginationModule
  ],
  providers: [
    DatePipe,
    {
      provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true
    }
  ]
    ,
  bootstrap: [AppComponent]
})
export class AppModule { }
