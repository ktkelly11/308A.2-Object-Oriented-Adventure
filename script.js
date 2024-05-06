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
}

const robin = new Character("Robin");
robin.inventory = ["sword", "potion", "artifact"];
robin.companion = new Character("Leo");
robin.companion.type = "Cat";
robin.companion.companion = new Character("Frank");
robin.companion.companion.type = "Flea";
robin.companion.companion.inventory = ["small hat", "sunglasses"];

// console.log(Character.companion);
// Character.roll();

// Part 3: Class Features
