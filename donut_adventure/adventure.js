class Hero {
  constructor(name) {
    this.health = 100;
    this.weapons = {
      sprinkleSpray: 5,
      sugarShock: 10
    };
    this.catchPhrases = ['i\'m fresher than day old pizza',
    'you can\'t count my calories'];
  }
  talkSass() {
    const randomPhrase = Math.floor(Math.random()*this.catchPhrases.length);
    console.log(this.catchPhrases[randomPhrase]);
  }
  announceHealth() {
    console.log(this.health);
  }
  fight() {
    console.log('i\'m ready to rumble')
  }
}

const dougie = new Hero('Dougie')

class Enemy {
  constructor(name) {
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
    console.log(this.catchPhrases[randomPhraseRat]);
    }
    announceHealth() {
    console.log(this.health);
  }
  fight() {
    console.log('i\'m gonna flatten you like a slice of pepperoni!')
  }
}
const pizzaRat = new Enemy('Pizza Rat')
