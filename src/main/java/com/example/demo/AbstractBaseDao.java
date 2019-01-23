package com.example.demo;

//import org.springframework.data.document.mongodb.MongoTemplate;
import org.springframework.data.mongodb.core.MongoTemplate;

public abstract class AbstractBaseDao {

    protected MongoTemplate mongoTemplate;

    public void setMongoTemplate(MongoTemplate template) {
        this.mongoTemplate = template;
    }

    public MongoTemplate getMongoTemplate() {
        return this.mongoTemplate;
    }

}
