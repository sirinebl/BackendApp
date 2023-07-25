import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UpdateproduitComponent } from './components/updateproduit/updateproduit.component';
import { ViewproduitsComponent } from './components/viewproduits/viewproduits.component';
import { AddproduitComponent } from './components/addproduits/addproduits.component';
const routes: Routes = [
  { path: '', component: ViewproduitsComponent },
  { path: 'add', component: AddproduitComponent },
  { path: 'update/:ref', component: UpdateproduitComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
