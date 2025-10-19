// This is an example of singleton pattern using an logger example

class Logger {
  private static instance: Logger;
  public logs: string[] = [];
  private constructor() {}

  static getInstance() {
    if (!Logger.instance) {
      Logger.instance = new Logger();
    }

    return Logger.instance;
  }

  log(message: string) {
    this.logs.push(message);
    console.log('LOGGING FROM LOGGER:', message);
  }

  info(message: string) {
    this.logs.push(message);
    console.log('LOGGING FROM INFO', message);
  }
}

const logger1 = Logger.getInstance();
const logger2 = Logger.getInstance();

logger1.log('sahil chalke');
logger2.info('new logger info');

console.log(logger1.logs);
