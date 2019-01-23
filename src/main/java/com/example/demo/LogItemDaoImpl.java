package com.example.demo;

//import net.pascalalma.mongo.entity.LogItem;
import org.bson.types.ObjectId;

public class LogItemDaoImpl extends AbstractBaseDao implements BaseDao<LogItem> {

    public LogItem selectByPk(ObjectId id) {
        return (LogItem)mongoTemplate.findById(id, LogItem.class);
    }

    public ObjectId insert(LogItem log) {
        mongoTemplate.insert(log);
        return log.getId();
    }
}
