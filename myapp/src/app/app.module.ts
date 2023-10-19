import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ProductsComponent } from './products/products.component';
import { UserregisterComponent } from './userregister/userregister.component';
import { TestuppercasepipePipe } from './testuppercasepipe.pipe';
import { TestreversepipePipe } from './testreversepipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProductsComponent,
    UserregisterComponent,
    TestuppercasepipePipe,
    TestreversepipePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
