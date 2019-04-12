import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './auth.guard';
import { HeaderFooterComponent } from './header-footer/header-footer.component';
import { SingleproductComponent } from './singleproduct/singleproduct.component';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [
  
  { path: 'login', component: LoginComponent },
  { path: '', pathMatch: 'full', redirectTo: '/login'},
  { path: 'register', component: RegisterComponent },
  { path: 'home', component: HomeComponent , canActivate: [AuthGuard]},
  //{ path: 'nav', component: HeaderFooterComponent },
  { path: 'cart/:id', component: CartComponent },
  { path: 'singleproduct/:id', component: SingleproductComponent },

   // otherwise redirect to home
  //{ path: '', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
