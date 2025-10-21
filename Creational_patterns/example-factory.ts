abstract class Enemy {
  abstract health: string;
  abstract damage: number;

  abstract attack(): void;
}

class Zombie extends Enemy {
  health = 'bad';
  damage = 10;

  attack(): void {
    console.log(`The Zombie attacks with ${this.damage} power`);
  }
}
class Vampire extends Enemy {
  health = 'bad';
  damage = 100;

  attack(): void {
    console.log(`The Vampire attacks with ${this.damage} power`);
  }
}
class Dragon extends Enemy {
  health = 'good';
  damage = 1000;

  attack(): void {
    console.log(`The Dragon attacks with ${this.damage} power`);
  }
}

type EnemyType = 'zombie' | 'vampire' | 'dragon';

const enemyMap: Record<EnemyType, new () => Enemy> = {
  zombie: Zombie,
  vampire: Vampire,
  dragon: Dragon,
};

class EnemyFactory {
  static createEnemy(type: EnemyType): Enemy {
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
