package com.example.demo;

import org.bson.types.ObjectId;

public interface BaseDao<T> {
    T selectByPk(ObjectId id);
    ObjectId insert(T entity);
}
