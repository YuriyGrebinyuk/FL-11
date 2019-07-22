/* Your code goes here */
class Fighter {
  constructor(data) {
    this._name = data.name;
    this._damage = data.damage;
    this._hp = data.hp;
    this.maxHp = data.hp;
    this._agility = data.agility;
    this.wins = 0;
    this.losses = 0;
  }
  getName() {
    return this._name;
  }
  setName(value) {
    this._name = value;
  }

  getDamage() {
    return this._damage;
  }
  setDamage(value) {
    this._damage = value;
  }

  getHealth() {
    return this._hp;
  }
  setHealth(value) {
    this._hp = value;
  }

  getAgility() {
    return this._agility;
  }
  setAgility(value) {
    this._agility = value;
  }

  attack(defender) {
    const HUNDRED = 101;
    if(Math.floor(Math.random() * HUNDRED) > defender.getAgility()) {
      defender.dealDamage(this._damage);
      let succAttack = console.log(`${this._name} make ${this._damage} damage to ${defender.getName()}`);
      return succAttack;
    } else {
      let failAttack = console.log(`${this._name} attack missed`);
      return failAttack;
    }
  }

  logCombatHistory() {
    let combatLog = console.log(`Name: ${this._name}, Wins: ${this.wins}, Losses: ${this.losses}`);
    return combatLog;
  }

  heal(incomingHeal) {
    const maximumHP = this.maxHp;
    let healed = this._hp + incomingHeal > maximumHP ? this._hp = maximumHP : this._hp += incomingHeal;
    return healed;
  }

  dealDamage(incomingDamage) {
    let damaged = this._hp - incomingDamage <= 0 ? this._hp = 0 : this._hp -= incomingDamage;
    return damaged;
  }

  addWin() {
    let wins = this.wins += 1
    return wins;
  }

  addLoss() {
    let losses = this.losses += 1
    return losses;
  }
}

const myFighter = new Fighter({
  name: 'John',
  damage: 20,
  agility: 25,
  hp: 100
});

const myFighter2 = new Fighter({
  name: 'Jim',
  damage: 10,
  agility: 40,
  hp: 120
});

function battle(fighter1, fighter2) {
  const TRUE = true;

  if(fighter1.getHealth() === 0) {
    let healthCheck1 = console.log(`${fighter1.getName()} is dead and can\`t fight.`);
    return healthCheck1;
  }
  if(fighter2.getHealth() === 0) {
    let healthCheck2 = console.log(`${fighter2.getName()} is dead and can\`t fight.`);
    return healthCheck2;
  }

  while(TRUE) {
    if(fighter1.getHealth() !== 0) {
      fighter1.attack(fighter2);
    } else {
      fighter2.addWin();
      fighter1.addLoss();
      break;
    }
    if(fighter2.getHealth() !== 0) {
      fighter2.attack(fighter1);
    } else {
      fighter1.addWin();
      fighter2.addLoss();
      break;
    }
  }
}

battle(myFighter, myFighter2);
