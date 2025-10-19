abstract class Coffee {
  abstract name: string;
  abstract prepare(): void;
}

class Latte extends Coffee {
  name = 'latte';
  prepare(): void {
    console.log('Steaming milk and adding espresso for Latte');
  }
}

class Espresso extends Coffee {
  name = 'Espresso';
  prepare(): void {
    console.log('Pulling espresso shot for Espresso');
  }
}

class CoffeeFactory {
  static createCoffee(type: 'latte' | 'espresso'): Coffee {
    switch (type) {
      case 'latte':
        return new Latte();
      case 'espresso':
        return new Espresso();
    }
  }
}

const coffee1 = CoffeeFactory.createCoffee('latte');
const coffee2 = CoffeeFactory.createCoffee('espresso');

coffee1.prepare();
coffee2.prepare();
