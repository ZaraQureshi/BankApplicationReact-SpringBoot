package com.xoriant.springboot.app.resource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.xoriant.springboot.app.dto.FundTransfer;
import com.xoriant.springboot.app.model.Account;
import com.xoriant.springboot.app.service.AccountService;
@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/accounts")
public class AccountResource {
	
	@Autowired
	private AccountService accountService;
	
	@PostMapping
	public Account addAccount(@RequestBody Account account) {
		
		return accountService.addAccount(account);
	}
	
	@DeleteMapping("/{accountNumber}")
	public void deleteAccount(@PathVariable long accountNumber) {
		accountService.deleteAccount(accountNumber);
	}
	
	@GetMapping("/{accountNumber}")
	public Account getBalance(@PathVariable long accountNumber) {
		return accountService.getBalance(accountNumber);
	}
	
	@PostMapping("/fundtransfer")
	public void fundTransfer(@RequestBody FundTransfer fundTransfer) {
		accountService.fundTransfer(fundTransfer);
		
	}
	
	@PostMapping("/withdraw")
	public void withdraw(@RequestBody FundTransfer withdraw) {
		accountService.withdraw(withdraw);
	}
	
	@PostMapping("/deposit")
	public void deposit(@RequestBody FundTransfer deposit) {
		accountService.deposit(deposit);
	}
	
//	@GetMapping("/statement")
//	public Account statement(@RequestBody Account accountNumber) {
//		accountService.getStatement(accountNumber);
//	}
}
