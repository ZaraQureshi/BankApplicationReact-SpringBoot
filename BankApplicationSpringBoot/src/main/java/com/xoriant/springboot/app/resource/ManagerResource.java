package com.xoriant.springboot.app.resource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.xoriant.springboot.app.dto.LoginRequest;
import com.xoriant.springboot.app.model.Manager;
import com.xoriant.springboot.app.service.ManagerService;

@RestController
@RequestMapping("/manager")
public class ManagerResource {
	
	@Autowired
	private ManagerService managerService;
	
	@PostMapping("/")
	public Manager addManager(@RequestBody Manager manager) {
		return managerService.addManager(manager);
	}
	
	@PostMapping("/login")
	public Manager managerLogin(@RequestBody LoginRequest request) {
		return managerService.login(request);
	}
}
