package com.xoriant.springboot.app.model;

import javax.annotation.Generated;
import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import lombok.Data;

@Data
@Entity
public class Customer {
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private Integer customerId;
	private String customerName;
	private String customerAddress;
	private String customerCity;
	private String customerState;
	private int customerPin;
	private String customerGender;
	private long customerPhone;
	private String customerEmail;
	private String password;
	@Column(name="mang_id")
	private int mangId;
	
}
