package com.xoriant.springboot.app.exception;


import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(code = HttpStatus.BA,reason = "Some parameters are invalid")
public class InvalidCredentialsException extends RuntimeException {
	public InvalidCredentialsException() {
		super("Invalid Credentials");
	}
}