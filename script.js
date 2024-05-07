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
}
