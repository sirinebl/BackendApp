import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AppService } from 'src/app/app.service';

import { Produit } from './../../produit';

@Component({
  selector: 'app-updateproduit',
  templateUrl: './updateproduit.component.html',
  styleUrls: ['./updateproduit.component.css'],
})
export class UpdateproduitComponent implements OnInit {
  produit?: Produit;
  data: any;

  constructor(
    private service: AppService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    let ref = this.route.snapshot.params['ref'];
    this.service.getUserById(ref).subscribe((data) => {
      this.produit = data;
      console.log(this.produit);
    });
  }

  form = new FormGroup({
    prix: new FormControl('', [Validators.required]),
    quantite: new FormControl('', [Validators.required]),
  });

  submit() {
    this.data = this.form.value;
    console.log(this.data);

    this.service
      .updateProduit(this.produit?.ref, this.data)
      .subscribe((data) => {
        console.log(data);
      });

    this.router.navigate(['/']);
  }
}
