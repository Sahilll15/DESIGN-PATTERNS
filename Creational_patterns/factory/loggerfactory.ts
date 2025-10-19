abstract class newLogger {
  abstract name: string;
  abstract log(message: string): void;
}

class ConsoleLogger extends newLogger {
  name = 'console';
  log(message: string) {
    console.log('logging using console logger', message);
  }
}

class FileLogger extends newLogger {
  name = 'file';
  log(message: string): void {
    console.log('file logger', message);
  }
}

class LoggerFactory {
  private static instance: Record<string, newLogger> = {};
  static createLogger(type: 'console' | 'file' | 'info'): newLogger {
    if (!LoggerFactory.instance[type]) {
      switch (type) {
        case 'console':
          LoggerFactory.instance[type] = new ConsoleLogger();
          break;

        case 'file':
          LoggerFactory.instance[type] = new FileLogger();
          break;

        default:
          throw new Error(`Logger type ${type} is not registered`);
      }
    }

    return LoggerFactory.instance[type];
  }
}

const consolelog = LoggerFactory.createLogger('console');
const filelog = LoggerFactory.createLogger('file');
// const newlogger = LoggerFactory.createLogger('info');

consolelog.log('sahilchalke');
filelog.log('sahilcs file');
