class notificationLogger {
  private static instance: notificationLogger;
  private static logs: {
    message: string;
    type: string;
  }[] = [];

  private constructor() {}

  static getInstance() {
    if (!notificationLogger.instance) {
      notificationLogger.instance = new notificationLogger();
    }

    return notificationLogger.instance;
  }

  public log(message: string, type: string) {
    notificationLogger.logs.push({ message: message, type: type });
    console.log('The notification is', message);
  }

  public static getLogs() {
    return notificationLogger.logs;
  }
}

enum NotificationType {
  email = 'email',
  sms = 'sms',
  push = 'push',
}

abstract class OurNotification {
  abstract type: NotificationType;
  abstract userId: string;
  abstract timestamp: Date;
  abstract notify(notificationMessage: string): void;
}

const logger = notificationLogger.getInstance();

class EmailNotification extends OurNotification {
  type = NotificationType.email;
  userId = '1';
  timestamp = new Date();

  notify(notificationMessage: string) {
    logger.log(
      `The notification is email type ${notificationMessage}`,
      'email',
    );
  }
}

class smsNotification extends OurNotification {
  type = NotificationType.sms;
  userId = '2';
  timestamp = new Date();

  notify(notificationMessage: string) {
    logger.log(`The notification is sms type ${notificationMessage}`, 'sms');
  }
}

class pushNotification extends OurNotification {
  type = NotificationType.push;
  userId = '3';
  timestamp = new Date();

  notify(notificationMessage: string) {
    logger.log(`The notification is push type ${notificationMessage}`, 'push');
  }
}

class NotificationFactory {
  static createNotification(type: NotificationType) {
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

const emailNotificationManager = NotificationFactory.createNotification(
  NotificationType.email,
);

const smsNotificationManager = NotificationFactory.createNotification(
  NotificationType.sms,
);

const pushNotificationManager = NotificationFactory.createNotification(
  NotificationType.push,
);

emailNotificationManager.notify('Sahil chalke is doing good things');
smsNotificationManager.notify('devlopeing new things');
pushNotificationManager.notify('i am learning Design patterns');

console.log('List of all the logs', notificationLogger.getLogs());
