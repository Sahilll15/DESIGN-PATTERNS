class newEnemy {
  name!: string;
  health!: number;
  damage!: number;
  weapon?: string;
  armor?: string;
  ability?: string;

  showStats() {
    console.log(
      `${this.name} | Health: ${this.health} | Damage: ${this.damage} | Weapon: ${this.weapon} | Armor: ${this.armor} | Ability: ${this.ability}`,
    );
  }
}

class EnemyBuilder {
  private enemy: newEnemy;

  constructor(name: string) {
    this.enemy = new newEnemy();
    this.enemy.name = name;
    return this;
  }

  setName(name: string) {
    this.enemy.name = name;
    return this;
  }

  setHealth(health: number) {
    this.enemy.health = health;
    return this;
  }

  setDamage(damage: number) {
    this.enemy.damage = damage;
    return this;
  }

  setWeapon(weapon: string) {
    this.enemy.weapon = weapon;
    return this;
  }

  setArmor(armor: string) {
    this.enemy.armor = armor;
    return this;
  }

  setAbility(ability: string) {
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
