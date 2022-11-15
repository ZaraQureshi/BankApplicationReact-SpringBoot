package com.xoriant.springboot.app.resource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.xoriant.springboot.app.dto.LoginRequest;
import com.xoriant.springboot.app.dto.LoginResponse;
import com.xoriant.springboot.app.exception.InvalidCredentialsException;
import com.xoriant.springboot.app.model.Customer;
import com.xoriant.springboot.app.model.Manager;
import com.xoriant.springboot.app.service.CustomerService;
import com.xoriant.springboot.app.service.ManagerService;

@RestController
@RequestMapping("/auth")
@CrossOrigin(origins = "*")
public class AuthResource {
	
	@Autowired
	private CustomerService customerService;
	@Autowired
	private ManagerService managerService;


	@PostMapping("/login")
	public LoginResponse login(@RequestBody LoginRequest request) {
		try {
			Customer customer= customerService.login(request);
			return LoginResponse.fromCustomer(customer);
		}catch(InvalidCredentialsException exception) {
			Manager manager = managerService.login(request);
			return LoginResponse.fromManager(manager);
		}
	}

}
