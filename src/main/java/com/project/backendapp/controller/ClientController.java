package com.project.backendapp.controller;



import com.project.backendapp.model.Produit;
import com.project.backendapp.service.ProduitService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*")
@RestController
public class ClientController {

    @Autowired
    private ProduitService produitService;

    @PostMapping("/add")
    public String addproduit(@RequestBody Produitproduit){
        produitService.addProduit(produit);
        return "produit Added Successfully...";
    }

    @GetMapping("/produit")
    public List<Produit> getProduit(){
        System.out.println("Produit..");
        return produitService.getProduit();
    }

    @GetMapping("/produit/{ref}")
    public Produit getProduitByREF(@PathVariable("ref") int ref){
        return Produit.getProduitByref(ref);
    }

    @PutMapping("/update/{ref}")
    public String updateProduit(@PathVariable("ref") int ref, @RequestBody Produit produit){
        produitService.updateProduit(ref, produit);
        return "produit Updated Successfully...";
    }

    @DeleteMapping("/delete/{ref}")
    public String deleteProduit(@PathVariable("ref") int ref){
        produitService.deleteProduit(ref);
        return "produitDeleted Successfully...";
    }

}
