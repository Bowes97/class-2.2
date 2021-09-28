class Animal {
    constructor(move, name) {
        this.move = move;
        this.name = name
    }
    run() {
        console.log(`I can run ${this.move}`);
    }
    species() {
        console.log(`I am ${this.name}`);
    }
}
class Predator extends Animal {
    constructor(move, name, dangerous) {
        super(move, name)
        this.dangerous = dangerous
    }
    behavior() {
        console.log(`I am ${this.dangerous}`);
    }
}
class Wolf extends Predator {
    constructor(move, name, dangerous, place) {
        super(move, name, dangerous)
        this.place = place
    }
    live() {
        console.log(`I live in ${this.place}`);
    }
}
let wolf = new Wolf('fast', 'wolf', 'aggressive', 'forest')
console.log(wolf);
wolf.species()
wolf.run()
wolf.behavior()
wolf.live()
class Lion extends Predator {
    constructor(move, name, dangerous, group) {
        super(move, name, dangerous)
        this.group = group
    }
    family() {
        console.log(`I have a big ${this.group}`);
    }
}
let lion = new Lion('fast', 'lion', 'dangerous', 'family')
console.log(lion);
lion.species();
lion.run()
lion.behavior()
lion.family()
class Herbivorous extends Animal {
    constructor(move, name, eat) {
        super(move, name)
        this.eat = eat
    }
    food() {
        console.log(`I eat only ${this.eat} foods`);
    }
}
class Giraffe extends Herbivorous {
    constructor(move, name, eat, height) {
        super(move, name, eat);
        this.height = height
    }
    growth() {
        console.log(`I am ${this.height}`);
    }
}
let giraffe = new Giraffe('fast', 'Giraffe', 'plant', 'tall')
console.log(giraffe);
giraffe.species()
giraffe.run();
giraffe.food();
giraffe.growth()
class Koala extends Herbivorous {
    constructor(move, name, eat, activity) {
        super(move, name, eat)
        this.activity = activity
    }
    sleep() {
        console.log(`I love ${this.activity}`);
    }
}
let koala = new Koala('slovly', 'Koala', 'plant', 'sleep')
console.log(koala);
koala.species();
koala.run();
koala.food();
koala.sleep();
