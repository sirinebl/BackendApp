import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { AddproduitComponent } from './components/addproduit/addproduit.component';
import { UpdateproduitComponent } from './components/updateproduit/updateproduit.component';
import { ViewproduitsComponent } from './components/viewproduits/viewproduits.component';

@NgModule({
  declarations: [
    AppComponent,
    AddproduitComponent,
    UpdateproduitComponent,
    ViewproduitsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
