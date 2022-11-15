package com.xoriant.springboot.app.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.xoriant.springboot.app.model.Account;
import com.xoriant.springboot.app.model.Customer;

@Repository
public interface AccountRepository extends JpaRepository<Account, Long>{

	Account getAccountBalanceByAccountNumber(long accountNumber);
	
	Account getByAccountNumber(long accountNumber);
	
	@Modifying
	@Query("update Account a set a.accountBalance = a.accountBalance+ :amount where a.accountNumber = :accountNumber")
	int setBalancePayee(@Param(value = "accountNumber") long accountNumber, @Param(value = "amount") long amount);
	
	@Modifying
	@Query("update Account a set a.accountBalance = a.accountBalance- :amount where a.accountNumber = :accountNumber")
	int setBalancePayer(@Param(value = "accountNumber") long accountNumber, @Param(value = "amount") long amount);

	@Modifying
	@Query("update Account a set a.accountBalance = a.accountBalance- :amount where a.accountNumber = :accountNumber")
	int withdrawAmount(@Param(value = "accountNumber") long accountNumber, @Param(value = "amount") long amount);
	
	
	
}
