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
