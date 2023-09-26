import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ProductsComponent } from './products/products.component';
import { UserregisterComponent } from './userregister/userregister.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent },
  {path: 'register', component: UserregisterComponent },
  {path:'products', component: ProductsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
