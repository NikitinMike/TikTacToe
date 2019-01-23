package com.example.demo;

import org.apache.log4j.Logger;
import org.junit.After;
import org.junit.AfterClass;
import org.junit.Before;
import org.junit.BeforeClass;

public class MongoDBTest {

    private static final Logger logger = Logger.getLogger(MongoDBTest.class);
    static Process p = null;

    @Before
    public void setUp() throws Exception {
        //@Todo Run mongo with a test specific .js file to produce initial data state
    }

    @After
    public void tearDown() throws Exception {
        //@Todo Drop database
    }

    @BeforeClass
    public static void beforeClass() throws Exception {
        String[] command = new String[]{"/usr/bin/mongod", "--dbpath", "/tmp/mongodb/data", "--rest"};
        ProcessBuilder pb = new ProcessBuilder(command);
        p = pb.start();
        logger.debug("Process started with pid: " + p);
    }

    @AfterClass
    public static void afterClass() throws Exception {
        // Stop mongod process
        boolean processClosed = false;

        Thread.sleep(500);
        if (p != null) {
            while (!processClosed) {

                try {
                    p.destroy();
                    processClosed = true;
                    Thread.sleep(500);
                    logger.info(" Process destroyed: " + p.exitValue());
                } catch (IllegalThreadStateException itse) {
                    logger.warn(itse);
                    processClosed = false;
                }
            }
        }
    }
}
