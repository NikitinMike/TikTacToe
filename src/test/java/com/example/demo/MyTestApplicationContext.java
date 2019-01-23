package com.example.demo;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class MyTestApplicationContext {

    private static MyTestApplicationContext testContext = null;

    ApplicationContext context = null;

    private MyTestApplicationContext() {
    }

    public static MyTestApplicationContext getInstance()
    {
        if (testContext == null) {
            testContext = new MyTestApplicationContext();
            testContext.initialise();
        }
        return testContext;
    }

    public void initialise() {
        context = new ClassPathXmlApplicationContext(new String[]{"spring-config.xml"});
    }

    public Object getBean(String name) {
        return context.getBean(name);
    }

    public ApplicationContext getSpringContext() {
        return context;
    }
}
