class Hamster {
  constructor(name) {
    this.owner = '';
    this.name = name;
    this.price = 15;
  }
  wheelRun(){
    console.log('squeak squeak');
  }
  eatFood(){
    console.log('nibble nibble');
  }
  getPrice(){
    return this.price;
  }
}

class Person {
  constructor(name) {
    this.name = name;
    this.age = 0;
    this.height = 0;
    this.weight = 0;
    this.mood = 0;
    this.hamsters = [];
    this.bankAccount = 0;
  }
  getName() {
    return this.name;
  }
  getAge() {
    return this.age;
  }
  getWeight() {
    return this.weight;
  }
  greet(otherPerson) {
    console.log(`Hi ${otherPerson.name}`);
  }
  eat(num) {
    let totalEat = [];
    for (let i = 0; i < num; i++) {
    this.weight++;
    this.mood++;
    totalEat.push(i)
    }
  console.log(this.name + ' ate ' + totalEat.length + ' times!');
  }
  exercise(num) {
    let totalExercise = [];
    for (let i = 0; i < num; i++) {
    this.weight--
    totalExercise.push(i)
    }
    console.log(this.name + ' exercised ' + totalExercise.length + ' times!');
  }
  ageUP(num) {
    let totalAgeUp = [];
    for (let i = 0; i < num; i++) {
    this.age ++;
    this.height++;
    this.weight++;
    this.mood--;
    this.bankAccount+=10;
    totalAgeUp.push(i)
    }
    console.log(this.name + ' grew up ' + totalAgeUp.length + ' years!')
  }
  buyHamster(hamster) {
    {
    this.hamsters.push(hamster)
    this.mood+=10;
    this.bankAccount -= hamster.getPrice()
    }
  console.log(this.name + ' bought ' + hamster.name);
  }
}

const timmy = new Person('Timmy')
timmy.ageUP(5)
timmy.eat(5)
timmy.exercise(5)
timmy.ageUP(9)

const gus = new Hamster('Gus');
gus.owner = 'Timmy';
timmy.buyHamster(gus)
timmy.ageUP(15)
timmy.eat(2)
timmy.exercise(2)

console.log(timmy)
