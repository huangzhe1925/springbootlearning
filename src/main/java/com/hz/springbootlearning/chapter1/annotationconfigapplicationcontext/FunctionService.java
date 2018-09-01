package com.hz.springbootlearning.chapter1.annotationconfigapplicationcontext;

import org.springframework.stereotype.Service;

@Service
public class FunctionService {
	public String sayHello(String word) {
		return "Hello" + word;
	}
}
