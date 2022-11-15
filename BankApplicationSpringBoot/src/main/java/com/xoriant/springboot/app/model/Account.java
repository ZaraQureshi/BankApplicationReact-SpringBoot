package com.xoriant.springboot.app.model;

import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

import com.xoriant.springboot.app.Enum.AccountType;

import lombok.Data;

@Data
@Entity
public class Account {
	@Id
	private long accountNumber;
	private AccountType type;
	private long accountBalance;
	
	@ManyToOne(cascade=CascadeType.PERSIST)
	@JoinColumn(name="customer_id")
	private Customer customer;
	
//	@OneToMany(fetch=FetchType.LAZY,mappedBy = "account")
//	private Set<Transaction> transactions;
	
}
