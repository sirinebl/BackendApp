import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Produit } from './produit';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  deleteProduit(ref: number) {
    throw new Error('Method not implemented.');
  }
  private url = 'http://localhost:8080/';

  constructor(private http: HttpClient) {}

  // Add Produit - Create
  addproduit(produit: Produit) {
    return this.http.post<Produit>(`${this.url}add`, produit);
  }

  // Get Produit - Read
  getProduits(): Observable<any[]> {
    return this.http.get<any[]>(this.url + 'produits');
  }

  // Get User by Ref - Read
  getUserById(ref: number): Observable<Produit> {
    return this.http.get<Produit>(`${this.url}produit/${ref}`);
  }

  // Update User - Update
  updateUser(ref?: number, Produit?: any): Observable<any> {
    return this.http.put<any>(`${this.url}update/${ref}`, Produit);
  }

  // Delete User - Delete
  deleteUser(ref: number): Observable<any> {
    return this.http.delete<any>(`${this.url}delete/${ref}`);
  }
}
