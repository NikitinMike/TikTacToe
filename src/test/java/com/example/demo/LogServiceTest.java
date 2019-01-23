package com.example.demo;

import junit.framework.Assert;
import org.apache.log4j.Logger;
import org.bson.types.ObjectId;
import org.junit.Before;
import org.junit.Test;

public class LogServiceTest extends MongoDBTest {

    private static final Logger logger = Logger.getLogger(LogServiceTest.class);
    private LogService service = null;

//    @Test
    public void testCreateAndFindLog() throws Exception {

        ObjectId id = null;

        for (int i = 0; i < 3; i++) {
            LogItem log = new LogItem();
            log.setMessage("just some text " + i);

//            id = service.add(log);
//            logger.debug("log.id = " + id);
        }

//        LogItem logFound = service.get(id);
//        logger.debug("log = "+ logFound.toString());
//        Assert.assertNotNull(logFound);
    }

    @Before
    public void setUp() throws Exception {
        logger.info("setting up test");
        super.setUp();
//        service = MyTestApplicationContext.getInstance().getBean("logService");
        //@TODO Run mongo with a test specific .js file to produce initial data state
    }
}