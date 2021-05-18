class Hero {
  constructor(name) {
    this.name = name;
    this.health = 100;
    this.weapons = {
      sprinkleSpray: 5,
      sugarShock: 10
    };
    this.catchPhrases = ['i\'m fresher than day old pizza',
    'you can\'t count my calories']
  }
  talkSass() {
    const randomPhrase = Math.floor(Math.random()*this.catchPhrases.length);
    console.log(`${this.name} says: ${this.catchPhrases[randomPhrase]}`);
  }
  announceHealth() {
    console.log(this.health);
  }
  fight(enemy) {
    console.log(`${this.name} says: i\'m ready to rumble`)
    let userImput = prompt('What weapon would you like to use? (sprinkleSpray or sugarShock)')
    if (userImput == 'sprinkleSpray') {
      enemy.health -= this.weapons.sprinkleSpray;
      console.log(`${this.name} hit ${enemy.name}! with ${Object.keys(this.weapons)[0]} now his health is ${enemy.health}.`);
    } else if (userImput == 'sugarShock') {
      enemy.health -= this.weapons.sugarShock;
      console.log(`${this.name} hit ${enemy.name}! with ${Object.keys(this.weapons)[1]} now his health is ${enemy.health}.`);
    } else {
      alert('not a valid weapon choice')
    }
    console.log(`${enemy.name} has ${enemy.health} health.`);
  }
}

const dougie = new Hero('Dougie')

class Enemy {
  constructor(name) {
    this.name = name;
    this.health = 100;
    this.weapons = {
      pepperoniStars: 5,
      cheeseGrease: 10
    }
    this.catchPhrases = ['i\'m youtube famous',
    'i\'m more dangerous than an uncovered sewer']
    }
    talkSmack() {
      const randomPhraseRat = Math.floor(Math.random()*this.catchPhrases.length);
    console.log(`${this.name} says: ${this.catchPhrases[randomPhraseRat]}`);
    }
    announceHealth() {
    console.log(this.health);
  }
  fight(enemy) {
    console.log(`${this.name} says: i\'m gonna flatten you like a slice of pepperoni!`);
    let ratAttack = this.weapons[Object.keys(this.weapons)[Math.floor(Math.random()*Object.keys(this.weapons).length)]];
    if (ratAttack == this.weapons.pepperoniStars) {
      enemy.health -= this.weapons.pepperoniStars;
      console.log(`${this.name} hit ${enemy.name}! with ${Object.keys(this.weapons)[0]} now ${enemy.name} health is ${enemy.health}.`);
    } else if (ratAttack == this.weapons.cheeseGrease) {
      enemy.health -= this.weapons.cheeseGrease;
      console.log(`${this.name} hit ${enemy.name}! with ${Object.keys(this.weapons)[1]} now ${enemy.name} health is ${enemy.health}.`);
    } else {
      console.log('Pizza rat didn\'t attack')
    }
    console.log(`${enemy.name} has ${enemy.health} health.`);
  }
}
const pizzaRat = new Enemy('Pizza Rat')

dougie.talkSass()
pizzaRat.talkSmack()
dougie.announceHealth()
pizzaRat.announceHealth()
pizzaRat.fight(dougie)
dougie.fight(pizzaRat)
dougie.announceHealth()
pizzaRat.announceHealth()
