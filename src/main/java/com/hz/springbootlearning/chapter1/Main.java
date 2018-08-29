package com.hz.springbootlearning.chapter1;

import org.springframework.context.annotation.AnnotationConfigApplicationContext;

public class Main {
	public static void main(String args[]) {
//		AnnotationConfigApplicationContext context = new AnnotationConfigApplicationContext(DiConfig.class);
//		UseFunctionService useFunctionService = context.getBean(UseFunctionService.class);
		
		AnnotationConfigApplicationContext context = new AnnotationConfigApplicationContext(JavaConfig.class);
		UseFunctionService useFunctionService = context.getBean(UseFunctionService.class);
		System.out.println(useFunctionService.sayHello(" World"));
		
		context.close();
	}
}
