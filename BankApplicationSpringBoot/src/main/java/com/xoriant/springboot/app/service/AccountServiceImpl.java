package com.xoriant.springboot.app.service;

import java.sql.Timestamp;
import java.time.Instant;
import java.time.LocalDateTime;
import java.util.Random;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.xoriant.springboot.app.Enum.TransactionType;
import com.xoriant.springboot.app.dto.FundTransfer;
import com.xoriant.springboot.app.exception.InvalidCredentialsException;
import com.xoriant.springboot.app.model.Account;
import com.xoriant.springboot.app.model.Customer;
import com.xoriant.springboot.app.model.Transaction;
import com.xoriant.springboot.app.repository.AccountRepository;
import com.xoriant.springboot.app.repository.CustomerRepository;
import com.xoriant.springboot.app.repository.TransactionRepository;

@Service
public class AccountServiceImpl implements AccountService{

	@Autowired
	private AccountRepository repository;
	@Autowired
	private CustomerRepository custRepository;
	@Autowired
	private TransactionRepository transRepository;
	
	@Override
	public Account addAccount(Account account) {
		System.out.println(account.getCustomer().getCustomerId());
		Customer c=custRepository.getByCustomerId(account.getCustomer().getCustomerId());
		if(c!=null) {
			long number = (long) Math.floor(Math.random() * 9_000_000_000L) + 1_000_000_000L;
			account.setAccountNumber(number);
		}
		return repository.save(account);
	}

	@Override
	public void deleteAccount(long accountNumber) {
		
		repository.deleteById(accountNumber);
	}

	@Override
	public Account getBalance(long accountNumber) {
		
		return repository.getAccountBalanceByAccountNumber(accountNumber);
	}

	@Transactional
	@Override
	public void fundTransfer(FundTransfer fundTransfer) {
		
		int payee=repository.setBalancePayee(fundTransfer.getPayeeAccount(), fundTransfer.getAmount());
		int payer=repository.setBalancePayer(fundTransfer.getPayerAccount(), fundTransfer.getAmount());
		if(payee==0||payer==0) {
			throw new InvalidCredentialsException();
		}else{
			Transaction transaction=new Transaction();
//			Account account=new Account();
//			account.getAccountBalance();
			Account payerAccountNum =repository.getByAccountNumber(fundTransfer.getPayeeAccount());
			Account payeeAccountNum =repository.getByAccountNumber(fundTransfer.getPayeeAccount());
			if(payerAccountNum!=null) {
				transaction.setAccount(payerAccountNum);
				long transactionId = (long) Math.floor(Math.random() * 9_000_000L) + 1_000_000L;
				transaction.setTransactionId(transactionId);
				long refId = (long) Math.floor(Math.random() * 9_000_000L) + 1_000_000L;
				transaction.setReferenceId(refId);
				transaction.setType(TransactionType.DEBIT);
				transaction.setClosingBalance(payerAccountNum.getAccountBalance());
				transaction.setTimeStamp(Timestamp.from(Instant.now()));
				transRepository.save(transaction);
			}
			if(payeeAccountNum!=null) {
				transaction.setAccount(payeeAccountNum);
				long transactionId = (long) Math.floor(Math.random() * 9_000_000_000L) + 1_000_000_000L;
				transaction.setTransactionId(transactionId);
				long refId = (long) Math.floor(Math.random() * 9_000_000L) + 1_000_000L;
				transaction.setReferenceId(refId);
				transaction.setType(TransactionType.CREDIT);
				transaction.setClosingBalance(payeeAccountNum.getAccountBalance());
				transaction.setTimeStamp(Timestamp.from(Instant.now()));
				transRepository.save(transaction);
			}
			
			
		}
		
	}

	@Transactional
	@Override
	public void withdraw(FundTransfer withdraw) {
		 int i=repository.withdrawAmount(withdraw.getPayerAccount(),withdraw.getAmount());
		 if(i==0) {
			 throw new InvalidCredentialsException();
		 }
	}

	@Transactional
	@Override
	public void deposit(FundTransfer deposit) {
		int i=repository.setBalancePayee(deposit.getPayeeAccount(), deposit.getAmount());
		if(i==0) {
			throw new InvalidCredentialsException();
		}
		
	}

	
	
}
