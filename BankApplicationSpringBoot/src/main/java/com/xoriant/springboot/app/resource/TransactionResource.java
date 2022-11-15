package com.xoriant.springboot.app.resource;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.xoriant.springboot.app.dto.CustomizedStatement;
import com.xoriant.springboot.app.model.Transaction;
import com.xoriant.springboot.app.service.TransactionService;

import lombok.Data;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/transactions")
public class TransactionResource {
	
	@Autowired
	private TransactionService transactionService;
	@GetMapping("statement/{accountNumber}")
	public List<Transaction> getStatement(@PathVariable long accountNumber) {
		return transactionService.getStatement(accountNumber);
	}

	@Data
	class TestResponse {
		private int count;
		private List<Transaction> transactions;
		public TestResponse(List<Transaction> transactions) {
			this.count = transactions.size();
			this.transactions = transactions;
		}
	}
	
	@PostMapping("customizedStatement")
	public TestResponse getCustomizedStatement(@RequestBody CustomizedStatement custom){
		System.out.println(custom);
		List<Transaction> transactions =  transactionService.getCustomizedStatement(custom);
		System.out.println(transactions);
		return new TestResponse(transactions);
	}
}
