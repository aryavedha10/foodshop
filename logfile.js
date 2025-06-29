import java.io.IOException;
import java.util.logging.*;

public class HundredLineLogger {
    private static final Logger LOGGER = Logger.getLogger(HundredLineLogger.class.getName());

    public static void main(String[] args) throws IOException {
        // Configure logger
        LOGGER.setUseParentHandlers(false);
        FileHandler fh = new FileHandler("hundred_lines.log");
        fh.setFormatter(new SimpleFormatter());
        LOGGER.addHandler(fh);
        LOGGER.setLevel(Level.INFO);

        // Generate 100 log lines
        for (int i = 1; i <= 100; i++) {
            LOGGER.info("Log line " + i + ": This is a sample log message.");
        }

        fh.close();
    }
}
Jun 29, 2025 10:15:30 AM HundredLineLogger main
INFO: Log line 1: This is a sample log message.
Jun 29, 2025 10:15:30 AM HundredLineLogger main
INFO: Log line 2: This is a sample log message.
...
Jun 29, 2025 10:15:30 AM HundredLineLogger main
INFO: Log line 100: This is a sample log message.
Jun 29, 2025 11:02:10 AM com.myapp.ThousandLineLogger main
INFO: Log line 1: Sample message.
Jun 29, 2025 11:02:10 AM com.myapp.ThousandLineLogger main
INFO: Log line 2: Sample message.
...
Jun 29, 2025 11:02:15 AM com.myapp.ThousandLineLogger main
INFO: Log line 999: Sample message.
Jun 29, 2025 11:02:15 AM com.myapp.ThousandLineLogger main
INFO: Log line 1000: Sample message.
import java.io.File;
import java.io.IOException;
import java.util.logging.*;

public class ThousandLineLogger {
    public static void main(String[] args) {
        Logger logger = Logger.getLogger("MyLogger");
        FileHandler fh = null;
        try {
            new File("logs").mkdirs();
            fh = new FileHandler("logs/thousand_lines.log", 0, 1, false);
            fh.setFormatter(new SimpleFormatter());
            fh.setLevel(Level.INFO);
            logger.addHandler(fh);
            logger.setLevel(Level.INFO);
            logger.setUseParentHandlers(false);

            for (int i = 1; i <= 1000; i++) {
                logger.info("Log line " + i);
            }
        } catch (IOException | SecurityException e) {
            e.printStackTrace();
        } finally {
            if (fh != null) fh.close();
        }
    }
}

