package com.xoriant.springboot.app.dto;

import com.xoriant.springboot.app.model.Customer;
import com.xoriant.springboot.app.model.Manager;

import lombok.Data;

@Data
public class LoginResponse {
	
	private Integer id;
	private String name;
	private String email;
	private String role;
	
	public static LoginResponse fromCustomer(Customer entity) {
		LoginResponse loginResponse = new LoginResponse();
		loginResponse.setId(entity.getCustomerId());
		loginResponse.setEmail(entity.getCustomerEmail());
		loginResponse.setName(entity.getCustomerName());
		loginResponse.setRole("Customer");
		
		return loginResponse;
	}
	
	
	public static LoginResponse fromManager(Manager entity) {
		LoginResponse loginResponse = new LoginResponse();
		loginResponse.setId(entity.getManagerId());
		loginResponse.setEmail(entity.getManagerEmail());
		loginResponse.setName(entity.getManagerName());
		loginResponse.setRole("Manager");
		
		return loginResponse;
	}
}
