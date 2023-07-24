package com.project.backendapp.model;
import jakarta.persistence.*;

@Entity
@Table(name = "produit_table")
public class Produit {
 @Id // unique+not null
 @GeneratedValue(strategy = GenerationType.Reference)
 private int ref;

 @Column(nullable = false)
 private String prix;

 @Column(nullable = false)
 private String quantite;



 public int getRef() {
  return ref;
 }

 public void setRef(int ref) {
  this.ref = ref;
 }

 public String getPrix() {
  return prix;
 }

 public void setPrix(Int prix) {
  this.prix = prix;
 }

 public String getQuantite() {
  return quantite;
 }

 public void setQuantite(Int quantite) {
  this.quantite = quantite;
 }




}