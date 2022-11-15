package com.xoriant.springboot.app;

class B {
	
}

class A {
	
	B b;
	
	public A(B b) {
		this.b = b;
	}
}

class Context {
	public static A getA() {
		B b = new B();
		A a = new A(b);
		return a;
	}
}

public class Test {
	
	public static void main(String[] args) {
		A a = Context.getA();
	}
}
