package com.xoriant.springboot.app.model;

import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;

import lombok.Data;

@Data
@Entity
public class Manager {
	@Id
	private Integer managerId;
	private String managerName;
	private String managerAddress;
	private long managerPhone;
	private String managerEmail;
	private String password;
	
	@OneToMany(cascade=CascadeType.PERSIST, fetch = FetchType.LAZY)
	@JoinColumn(name="mang_id")
	private Set<Customer> customer;
	
	
}
