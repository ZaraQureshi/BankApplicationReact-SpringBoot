package com.xoriant.springboot.app.dto;

import lombok.Data;

@Data
public class FundTransfer {
	private long payeeAccount;
	private long payerAccount;
	private long amount;
}
