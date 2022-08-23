class Ninja {
    constructor(name, health, speed=3, strength=3) {
        this.name = name;
        this.health = health,
        this.speed = speed,
        this.strength = strength
    }
    sayName() {
        console.log(this.name)
    }
    showStats() {
        console.log(this.name, this.strength, this.speed, this.health)
    }
    drinkSake() {
        this.health +=10
    }
}
class Sensei  extends Ninja {
    constructor(name, health=200, speed=10, strength=10, wisdom=10) {
        super(name, health, speed, strength);
        this.wisdom = wisdom
    }
    speakWisdom() {
        this.drinkSake();
        console.log(`I sure am the smartest in the land...`);
    }
}

const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();

superSensei.showStats();
