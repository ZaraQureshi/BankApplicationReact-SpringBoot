package com.xoriant.springboot.app.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.xoriant.springboot.app.dto.LoginRequest;
import com.xoriant.springboot.app.exception.InvalidCredentialsException;
import com.xoriant.springboot.app.model.Customer;
import com.xoriant.springboot.app.model.Manager;
import com.xoriant.springboot.app.repository.ManagerRepository;

@Service
public class ManagerServiceImpl implements ManagerService {

	@Autowired
	private ManagerRepository repository;

	@Override
	public Manager addManager(Manager manager) {
		return repository.save(manager);
	}

	@Override
	public Manager login(LoginRequest request) {

		Manager manager = repository.findByManagerIdAndPassword(request.getId(), request.getPassword());
		
		if (manager != null) {
			return manager;
		}
		
		throw new InvalidCredentialsException();

	}

}
