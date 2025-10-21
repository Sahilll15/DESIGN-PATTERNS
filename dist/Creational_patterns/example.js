"use strict";
class Enemy {
}
class Zombie extends Enemy {
    constructor() {
        super(...arguments);
        this.health = 'bad';
        this.damage = 10;
    }
    attack() {
        console.log(`The Zombie attacks with ${this.damage} power`);
    }
}
class Vampire extends Enemy {
    constructor() {
        super(...arguments);
        this.health = 'bad';
        this.damage = 100;
    }
    attack() {
        console.log(`The Vampire attacks with ${this.damage} power`);
    }
}
class Dragon extends Enemy {
    constructor() {
        super(...arguments);
        this.health = 'good';
        this.damage = 1000;
    }
    attack() {
        console.log(`The Dragon attacks with ${this.damage} power`);
    }
}
const enemyMap = {
    zombie: Zombie,
    vampire: Vampire,
    dragon: Dragon,
};
class EnemyFactory {
    static createEnemy(type) {
        const enemyClass = enemyMap[type];
        return new enemyClass();
    }
}
const zombie = EnemyFactory.createEnemy('zombie');
zombie.attack();
const dragon = EnemyFactory.createEnemy('dragon');
dragon.attack();
const vampire = EnemyFactory.createEnemy('vampire');
vampire.attack();
