"use strict";
class Coffee {
}
class Latte extends Coffee {
    constructor() {
        super(...arguments);
        this.name = 'latte';
    }
    prepare() {
        console.log('Steaming milk and adding espresso for Latte');
    }
}
class Espresso extends Coffee {
    constructor() {
        super(...arguments);
        this.name = 'Espresso';
    }
    prepare() {
        console.log('Pulling espresso shot for Espresso');
    }
}
class CoffeeFactory {
    static createCoffee(type) {
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
