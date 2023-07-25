import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-addproduit',
  templateUrl: './addproduit.component.html',
  styleUrls: ['./addproduit.component.css'],
})
export class AddproduitComponent implements OnInit {
  constructor(private service: AppService, private router: Router) {}
  data: any;

  form = new FormGroup({
    prix: new FormControl('', [Validators.required]),
    quantite: new FormControl('', [Validators.required]),
  });
  ngOnInit(): void {}
  submit() {
    this.data = this.form.value;
    console.log(this.data);

    this.service.addproduit(this.data).subscribe((data) => {
      console.log(data);
    });
    this.router.navigate(['/']);
  }
}
