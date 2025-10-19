"use strict";
class Burger {
    constructor() {
        this.bun = '';
        this.patty = '';
        this.veggies = [];
        this.sauces = [];
    }
    describe() {
        console.log(`Burger with ${this.bun} bun, ${this.patty} patty, veggies: ${this.veggies.join(', ')}, sauces: ${this.sauces.join(', ')}`);
    }
}
class CustomBurgerBuilder {
    constructor() {
        this.burger = new Burger();
    }
    setBun(bun) {
        this.burger.bun = bun;
        return this;
    }
    setPatty(patty) {
        this.burger.patty = patty;
        return this;
    }
    addVeggie(veggie) {
        this.burger.veggies.push(veggie);
        return this;
    }
    addSauce(sauce) {
        this.burger.sauces.push(sauce);
        return this;
    }
    build() {
        return this.burger;
    }
}
const burger = new CustomBurgerBuilder()
    .setBun('Sesame')
    .setPatty('Beef')
    .addVeggie('Lettuce')
    .addVeggie('Tomato')
    .addSauce('Mayo')
    .addSauce('Ketchup')
    .build();
burger.describe();
