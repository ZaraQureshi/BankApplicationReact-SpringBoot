package com.xoriant.springboot.app.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.xoriant.springboot.app.dto.LoginRequest;
import com.xoriant.springboot.app.model.Customer;

public interface CustomerRepository extends JpaRepository<Customer, Integer>{

	Customer findByCustomerIdAndPassword(Integer customerId, String password);
	Customer getByCustomerId(int customerId);
	
	
}
