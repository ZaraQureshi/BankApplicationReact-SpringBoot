package com.xoriant.springboot.app.service;

import java.util.List;

import com.xoriant.springboot.app.dto.CustomizedStatement;
import com.xoriant.springboot.app.model.Transaction;

public interface TransactionService {

	List<Transaction> getStatement();

	List<Transaction> getStatement(long accountNumber);

	List<Transaction> getCustomizedStatement(CustomizedStatement custom);

}
