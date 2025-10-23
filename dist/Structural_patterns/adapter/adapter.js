"use strict";
class OldPaymentGateway {
    makePayment(amount) {
        console.log(`Payment of $${amount} processed through OLD gateway.`);
    }
}
class ECommerceApp {
    constructor(paymentProcessor) {
        this.paymentProcessor = paymentProcessor;
    }
    checkout(amount) {
        this.paymentProcessor.pay(amount);
    }
}
class OldPaymentAdapter {
    constructor(adapter) {
        this.oldGateway = adapter;
    }
    pay(amount) {
        this.oldGateway.makePayment(amount);
    }
}
const oldGateway = new OldPaymentGateway();
const adapter = new OldPaymentAdapter(oldGateway);
adapter.pay(1000);
