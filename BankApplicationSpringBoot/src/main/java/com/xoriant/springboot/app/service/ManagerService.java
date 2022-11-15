package com.xoriant.springboot.app.service;

import com.xoriant.springboot.app.dto.LoginRequest;
import com.xoriant.springboot.app.model.Manager;

public interface ManagerService {

	Manager addManager(Manager manager);

	
	Manager login(LoginRequest request);
}
