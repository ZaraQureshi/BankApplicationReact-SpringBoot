package com.xoriant.springboot.app.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.xoriant.springboot.app.dto.LoginRequest;
import com.xoriant.springboot.app.exception.InvalidCredentialsException;
import com.xoriant.springboot.app.model.Customer;
import com.xoriant.springboot.app.model.Manager;
import com.xoriant.springboot.app.repository.CustomerRepository;
import com.xoriant.springboot.app.repository.ManagerRepository;
import com.xoriant.springboot.app.resource.CustomerResource;

@Service
public class CustomerServiceImpl implements CustomerService {

	@Autowired
	private CustomerRepository repository;

	@Autowired
	private ManagerRepository managerRepository;

	@Override
	public Customer addCustomer(Customer cust) {
		return repository.save(cust);
	}

	@Override
	public Customer login(LoginRequest request) {

		Customer customer = repository.findByCustomerIdAndPassword(request.getId(), request.getPassword());

		if (customer != null) {
			return customer;
		}

		throw new InvalidCredentialsException();
	}

	@Override
	public List<Customer> getLogin() {
		return repository.findAll();
	}
}
