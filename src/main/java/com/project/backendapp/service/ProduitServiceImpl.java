package com.project.backendapp.service;

import org.springframework.stereotype.Service;

import com.project.backendapp.model.Produit;
import com.project.backendapp.repository.ProduitRepositoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import java.util.List;

@Service


public class ProduitServiceImpl  implements  ProduitService {
    @Autowired
private ProduitRepository produitRepositoryRepository;

    @Override
    public Produit addProduit(Produit produit) {
        return produitRepository.save(produit);
    }

    @Override
    public List<Produit> getProduit() {
        return (List<Produit>) produitRepository.findAll();
    }

    @Override
    public Produit getProduitByRef(int ref) {
        return produitRepository.findByRef(ref).get();
    }

    @Override
    public Produit updateProduit(int ref, Produit produit) {
        Produit produit1 = produitRepository.findByRef(ref).get();
        produit1.setPrix(produit.getPrix());
        produit1.setQuantite(produit.getQuantite());
        return produitRepository.save(produit1);
    }

    @Override
    public void deleteUser(int ref) {
        produitRepository.deleteByRef(ref);
    }
}



