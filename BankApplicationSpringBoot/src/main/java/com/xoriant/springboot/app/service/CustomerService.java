package com.xoriant.springboot.app.service;

import java.util.List;

import com.xoriant.springboot.app.dto.LoginRequest;
import com.xoriant.springboot.app.model.Customer;

public interface CustomerService {

	Customer addCustomer(Customer cust);

	Customer login(LoginRequest request);

	List<Customer> getLogin();
		
}
