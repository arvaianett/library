import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { SearchComponent } from './pages/search/search.component';
import { BasketComponent } from './pages/basket/basket.component';
import { MyBooksComponent } from './pages/my-books/my-books.component';
import { StaticsComponent } from './pages/statics/statics.component';
import { BookDetailsComponent } from './pages/book-details/book-details.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'search', component: SearchComponent },
  { path: 'basket', component: BasketComponent },
  { path: 'myBooks', component: MyBooksComponent },
  { path: 'statics', component: StaticsComponent },
  { path: 'bookDetails/:id', component: BookDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
