package com.xoriant.springboot.app.repository;

import java.sql.Date;
import java.sql.Timestamp;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.xoriant.springboot.app.model.Transaction;

@Repository
public interface TransactionRepository extends JpaRepository<Transaction, Long> {
//	List<Transaction> getByAccount(Long accountNumber);

	List<Transaction> getByAccountAccountNumber(long accountNumber);

	@Query("from Transaction where account.accountNumber=:accountNumber and closingBalance<=:amountLimit and timeStamp >= :fromDate and timeStamp <= :toDate")
	List<Transaction> getCustomizedStatement(long accountNumber, long amountLimit, Timestamp fromDate, Timestamp toDate);
	
	
}
