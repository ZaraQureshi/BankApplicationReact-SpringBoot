package com.xoriant.springboot.app.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.xoriant.springboot.app.dto.CustomizedStatement;
import com.xoriant.springboot.app.model.Account;
import com.xoriant.springboot.app.model.Transaction;
import com.xoriant.springboot.app.repository.AccountRepository;
import com.xoriant.springboot.app.repository.TransactionRepository;

@Service
public class TransactionServiceImpl implements TransactionService{

	@Autowired 
	TransactionRepository repository;
	
	@Autowired
	AccountRepository repo;
	
	@Override
	public List<Transaction> getStatement(long accountNumber) {
//		Optional<Account> res=repo.findById(accountNumber);
//		return new ArrayList<>();
		return repository.getByAccountAccountNumber(accountNumber);
	
	}

	@Override
	public List<Transaction> getStatement() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<Transaction> getCustomizedStatement(CustomizedStatement custom) {
		return repository.getCustomizedStatement(custom.getAccountNumber(),custom.getAmountLimit(), custom.getFromDate(), custom.getToDate());
	}
	
}
