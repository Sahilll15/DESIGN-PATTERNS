"use strict";
class newEnemy {
    showStats() {
        console.log(`${this.name} | Health: ${this.health} | Damage: ${this.damage} | Weapon: ${this.weapon} | Armor: ${this.armor} | Ability: ${this.ability}`);
    }
}
class EnemyBuilder {
    constructor(name) {
        this.enemy = new newEnemy();
        this.enemy.name = name;
        return this;
    }
    setName(name) {
        this.enemy.name = name;
        return this;
    }
    setHealth(health) {
        this.enemy.health = health;
        return this;
    }
    setDamage(damage) {
        this.enemy.damage = damage;
        return this;
    }
    setWeapon(weapon) {
        this.enemy.weapon = weapon;
        return this;
    }
    setArmor(armor) {
        this.enemy.armor = armor;
        return this;
    }
    setAbility(ability) {
        this.enemy.ability = ability;
        return this;
    }
    build() {
        return this.enemy;
    }
}
const zombieNew = new EnemyBuilder('sahil')
    .setAbility('hard')
    .setArmor('new')
    .setDamage(100)
    .setHealth(10)
    .setWeapon('code')
    .build();
zombieNew.showStats();
