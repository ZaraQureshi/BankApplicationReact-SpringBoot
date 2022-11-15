package com.xoriant.springboot.app.model;

import java.sql.Timestamp;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import com.xoriant.springboot.app.Enum.TransactionType;

import lombok.Data;

@Data
@Entity
public class Transaction {
	@Id
	private long transactionId;
	private long referenceId;
	private TransactionType type;
	private Timestamp timeStamp;
	private long closingBalance;
	
	@ManyToOne(cascade=CascadeType.PERSIST)
	@JoinColumn(name="account_number")
	private Account account;
}
