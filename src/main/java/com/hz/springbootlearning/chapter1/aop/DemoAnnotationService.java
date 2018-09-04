package com.hz.springbootlearning.chapter1.aop;

import org.springframework.stereotype.Service;

@Service
public class DemoAnnotationService {
	@Action(name = "add by annotation")
	public void add() {
	};
}
