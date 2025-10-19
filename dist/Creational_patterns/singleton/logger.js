"use strict";
// This is an example of singleton pattern using an logger example
class Logger {
    constructor() {
        this.logs = [];
    }
    static getInstance() {
        if (!Logger.instance) {
            Logger.instance = new Logger();
        }
        return Logger.instance;
    }
    log(message) {
        this.logs.push(message);
        console.log('LOGGING FROM LOGGER:', message);
    }
    info(message) {
        this.logs.push(message);
        console.log('LOGGING FROM INFO', message);
    }
}
const logger1 = Logger.getInstance();
const logger2 = Logger.getInstance();
logger1.log('sahil chalke');
logger2.info('new logger info');
console.log(logger1.logs);
