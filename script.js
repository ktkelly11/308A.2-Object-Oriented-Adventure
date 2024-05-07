// Part 1: Humble Beginnings
const adventurer = {
  name: "Robin",
  health: 10,
  inventory: ["sword", "potion", "artifact"],
  roll(mod = 0) {
    const result = Math.floor(Math.random() * 20) + 1 + mod;
    console.log(`${this.name} rolled a ${result}`);
  },
  companion: {
    name: "Leo",
    type: "Cat",
    friend: {
      name: "Frank",
      type: "Flea",
      belongings: ["small hat", "sunglasses"],
    },
  },
};

console.log(adventurer.name);
console.log(adventurer.inventory[1]);
console.log(adventurer.companion);
console.log(adventurer.companion.friend.belongings);

adventurer.inventory.forEach((item) => {
  console.log(item);
});

console.log(adventurer);
adventurer.roll();

// Part 2: Class Fantasy
class Character {
  constructor(name) {
    this.name = name;
    this.health = 100;
    this.inventory = [];
  }
  roll(mod = 0) {
    const result = Math.floor(Math.random() * 20) + 1 + mod;
    console.log(`${this.name} rolled a ${result}`);
  }
  addCompanion(friend) {
    this.companion.name = friend.name;
    this.companion.type = friend.type;
    this.companion.friend = companion.friend.name;
  }
}

const robin = new Character("Robin");
robin.inventory = ["sword", "potion", "artifact"];
robin.companion = new Character("Leo");
robin.companion.type = "Cat";
robin.companion.companion = new Character("Frank");
robin.companion.companion.type = "Flea";
robin.companion.companion.inventory = ["small hat", "sunglasses"];

// console.log(Character.companion);
// Character.companion.roll();

// Part 3: Class Features
class Adventurer extends Character {
  constructor(name, role) {
    super(name);
    // Adventurers have specialized roles.
    this.role = role;
    // Every adventurer starts with a bed and 50 gold coins.
    this.inventory.push("bedroll", "50 gold coins");
  }
  // Adventurers have the ability to scout ahead of them.
  scout() {
    console.log(`${this.name} is scouting ahead...`);
    super.roll();
  }
  lead() {
    console.log(`${this.name} is leading us...`);
    super.roll;
  }
  fight() {
    console.log(`${this.name} is fighting...`);
    super.roll;
  }
}

class companion extends Adventurer {
  constructor(name, type) {
    super(name);
    this.type = type;
    this.inventory.push("spyglass", "lamp");
  }
  lead() {
    console.log(`${this.name} is leading us...`);
    super.roll();
  }
}

const Robin = new Adventurer("Robin", "lead");
robin.inventory.push("sword", "potion", "artifact", "bedroll", "50 gold coins");

const Leo = new companion("Leo", "Cat");
Leo.inventory.push("spyglass", "lamp");
Robin.companion = Leo;

const Frank = new companion("Frank", "Flea");
Leo.companion = Frank;

// Part 4: Class Uniforms
class Character {
  static MAX_HEALTH = 100;
}

class Adventurer extends Character {
  static ROLES = ["Fighter", "Healer", "Wizard"];
}
// I know I have to " check to the constructor of the Adventurer class that ensures the given role matches one of these values," but I don't know how...

// Part 5: Gather your Party
