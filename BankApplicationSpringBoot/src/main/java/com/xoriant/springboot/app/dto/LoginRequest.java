package com.xoriant.springboot.app.dto;

import lombok.Data;

@Data
public class LoginRequest {
	private int id;
	private String password;
}
