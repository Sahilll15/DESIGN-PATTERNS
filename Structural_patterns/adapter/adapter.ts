class OldPaymentGateway {
  makePayment(amount: number): void {
    console.log(`Payment of $${amount} processed through OLD gateway.`);
  }
}
interface NewPaymentProcessor {
  pay(amount: number): void;
}
class ECommerceApp {
  constructor(private paymentProcessor: NewPaymentProcessor) {}
  checkout(amount: number) {
    this.paymentProcessor.pay(amount);
  }
}

class OldPaymentAdapter implements NewPaymentProcessor {
  private oldGateway: OldPaymentGateway;

  constructor(adapter: OldPaymentGateway) {
    this.oldGateway = adapter;
  }

  pay(amount: number): void {
    this.oldGateway.makePayment(amount);
  }
}

const oldGateway = new OldPaymentGateway();
const adapter = new OldPaymentAdapter(oldGateway);

adapter.pay(1000);
