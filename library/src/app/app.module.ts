import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';

import {TabMenuModule} from 'primeng/tabmenu';
import {DialogModule} from 'primeng/dialog';
import {InputTextModule} from 'primeng/inputtext';
import {CardModule} from 'primeng/card';

import { HomeComponent } from './pages/home/home.component';
import { SearchComponent } from './pages/search/search.component';
import { MyBooksComponent } from './pages/my-books/my-books.component';
import { StaticsComponent } from './pages/statics/statics.component';
import { BasketComponent } from './pages/basket/basket.component';
import { LayoutComponent } from './components/layout/layout.component';
import { BookDetailsComponent } from './pages/book-details/book-details.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    HomeComponent,
    SearchComponent,
    MyBooksComponent,
    StaticsComponent,
    BasketComponent,
    LayoutComponent,
    BookDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TabMenuModule,
    DialogModule,
    InputTextModule,
    CardModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
