package com.example.demo;

import org.bson.types.ObjectId;

public interface LogService<T> {

    public ObjectId add(T log);
    public T get(ObjectId id);  
  
}
