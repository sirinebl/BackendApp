package com.project.backendapp.service;
import com.project.backendapp.model.Produit;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public interface ProduitService {
}
@Service
public interface ProduitService {

    public Produit addProduit(Produit produit);

    public List<Produit> getProduit();

    public Produit getProduitByref(int ref);

    public Produit updateProduit(int ref , Produit produit);

    public void deleteProduit(int ref);

}