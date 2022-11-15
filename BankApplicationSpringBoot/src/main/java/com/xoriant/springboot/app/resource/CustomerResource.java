package com.xoriant.springboot.app.resource;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.xoriant.springboot.app.dto.LoginRequest;
import com.xoriant.springboot.app.exception.InvalidCredentialsException;
import com.xoriant.springboot.app.model.Customer;
import com.xoriant.springboot.app.service.CustomerService;



@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/customer")
public class CustomerResource {
	
	@Autowired
	private CustomerService customerService;
	
	@GetMapping("login/")
	public List<Customer> getCustomerLogin() {
		return customerService.getLogin();
	}

	@PostMapping("login")
	@ExceptionHandler(InvalidCredentialsException.class)
	public Customer customerLogin(@RequestBody LoginRequest loginRequest) {
		return customerService.login(loginRequest);
	}
	
	@PostMapping
	public Customer addCustomer(@RequestBody Customer cust) {
		return customerService.addCustomer(cust);
	}
}
