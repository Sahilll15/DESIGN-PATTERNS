"use strict";
class notificationLogger {
    constructor() { }
    static getInstance() {
        if (!notificationLogger.instance) {
            notificationLogger.instance = new notificationLogger();
        }
        return notificationLogger.instance;
    }
    log(message, type) {
        notificationLogger.logs.push({ message: message, type: type });
        console.log('The notification is', message);
    }
    static getLogs() {
        return notificationLogger.logs;
    }
}
notificationLogger.logs = [];
var NotificationType;
(function (NotificationType) {
    NotificationType["email"] = "email";
    NotificationType["sms"] = "sms";
    NotificationType["push"] = "push";
})(NotificationType || (NotificationType = {}));
class OurNotification {
}
const logger = notificationLogger.getInstance();
class EmailNotification extends OurNotification {
    constructor() {
        super(...arguments);
        this.type = NotificationType.email;
        this.userId = '1';
        this.timestamp = new Date();
    }
    notify(notificationMessage) {
        logger.log(`The notification is email type ${notificationMessage}`, 'email');
    }
}
class smsNotification extends OurNotification {
    constructor() {
        super(...arguments);
        this.type = NotificationType.sms;
        this.userId = '2';
        this.timestamp = new Date();
    }
    notify(notificationMessage) {
        logger.log(`The notification is sms type ${notificationMessage}`, 'sms');
    }
}
class pushNotification extends OurNotification {
    constructor() {
        super(...arguments);
        this.type = NotificationType.push;
        this.userId = '3';
        this.timestamp = new Date();
    }
    notify(notificationMessage) {
        logger.log(`The notification is push type ${notificationMessage}`, 'push');
    }
}
class NotificationFactory {
    static createNotification(type) {
        switch (type) {
            case NotificationType.email:
                return new EmailNotification();
            case NotificationType.sms:
                return new smsNotification();
            case NotificationType.push:
                return new pushNotification();
        }
    }
}
const emailNotificationManager = NotificationFactory.createNotification(NotificationType.email);
const smsNotificationManager = NotificationFactory.createNotification(NotificationType.sms);
const pushNotificationManager = NotificationFactory.createNotification(NotificationType.push);
emailNotificationManager.notify('Sahil chalke is doing good things');
smsNotificationManager.notify('devlopeing new things');
pushNotificationManager.notify('i am learning Design patterns');
console.log('List of all the logs', notificationLogger.getLogs());
