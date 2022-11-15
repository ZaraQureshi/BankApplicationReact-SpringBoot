package com.xoriant.springboot.app.service;

import com.xoriant.springboot.app.dto.FundTransfer;
import com.xoriant.springboot.app.model.Account;

public interface AccountService {

	Account addAccount(Account account);

	void deleteAccount(long accountNumber);

	Account getBalance(long accountNumber);

	void fundTransfer(FundTransfer fundtransfer);

	void withdraw(FundTransfer withdraw);

	void deposit(FundTransfer deposit);


}
