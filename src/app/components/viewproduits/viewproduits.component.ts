import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-viewproduits',
  templateUrl: './viewproduits.component.html',
  styleUrls: ['./viewproduits.component.css'],
})
export class ViewproduitsComponent implements OnInit {
  users: any[] | undefined;
  url: string = 'http://localhost:8080/';
  produits: any[] = [];

  constructor(private service: AppService, private router: Router) {}

  ngOnInit(): void {
    this.service.getProduits().subscribe((data) => {
      this.produits = data;
    });
  }

  deleteProduit(ref: number) {
    this.service.deleteProduit(ref).subscribe((data) => {
      this.produits = this.produits?.filter((produit) => produit.ref !== ref);
    });
    setTimeout(() => {
      window.location.reload();
    }, 100);
  }

  updateProduit(ref: number) {
    this.router.navigate(['update', ref]);
  }
}
