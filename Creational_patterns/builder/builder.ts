class Burger {
  bun: string = '';
  patty: string = '';
  veggies: string[] = [];
  sauces: string[] = [];

  describe() {
    console.log(
      `Burger with ${this.bun} bun, ${this.patty} patty, veggies: ${this.veggies.join(', ')}, sauces: ${this.sauces.join(', ')}`,
    );
  }
}

interface BurgerBuilder {
  setBun(bun: string): this;
  setPatty(patty: string): this;
  addVeggie(veggie: string): this;
  addSauce(sauce: string): this;
  build(): Burger;
}

class CustomBurgerBuilder implements BurgerBuilder {
  private burger = new Burger();

  setBun(bun: string) {
    this.burger.bun = bun;
    return this;
  }
  setPatty(patty: string) {
    this.burger.patty = patty;
    return this;
  }
  addVeggie(veggie: string) {
    this.burger.veggies.push(veggie);
    return this;
  }
  addSauce(sauce: string) {
    this.burger.sauces.push(sauce);
    return this;
  }

  build(): Burger {
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
