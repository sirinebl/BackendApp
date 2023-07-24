package com.project.backendapp.repository;

import com.project.backendapp.model.Produit;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProduitRepository extends CrudRepository<Produit , Long> {
}
