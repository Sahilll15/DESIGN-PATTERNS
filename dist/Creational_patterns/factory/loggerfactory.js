"use strict";
class newLogger {
}
class ConsoleLogger extends newLogger {
    constructor() {
        super(...arguments);
        this.name = 'console';
    }
    log(message) {
        console.log('logging using console logger', message);
    }
}
class FileLogger extends newLogger {
    constructor() {
        super(...arguments);
        this.name = 'file';
    }
    log(message) {
        console.log('file logger', message);
    }
}
class LoggerFactory {
    static createLogger(type) {
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
LoggerFactory.instance = {};
const consolelog = LoggerFactory.createLogger('console');
const filelog = LoggerFactory.createLogger('file');
// const newlogger = LoggerFactory.createLogger('info');
consolelog.log('sahilchalke');
filelog.log('sahilcs file');
