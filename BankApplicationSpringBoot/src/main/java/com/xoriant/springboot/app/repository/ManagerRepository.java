package com.xoriant.springboot.app.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.xoriant.springboot.app.model.Manager;

@Repository
public interface ManagerRepository extends JpaRepository<Manager, Integer>{

	Manager findByManagerIdAndPassword(Integer id, String password);

}
